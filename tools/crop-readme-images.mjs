import { chromium } from "@playwright/test";
import { createServer } from "node:http";
import { mkdir, readFile, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imageDir = path.join(root, "docs", "assets", "readme");
const port = 4341;
const baseUrl = `http://localhost:${port}`;

const crops = [
  {
    source: "home.png",
    output: "preview-home-hero.png",
    label: "Hero principal",
    crop: { x: 0, y: 0, width: 1654, height: 900 }
  },
  {
    source: "home.png",
    output: "preview-home-showreel.png",
    label: "Showreel visual",
    crop: { x: 0, y: 1370, width: 1654, height: 850 }
  },
  {
    source: "home.png",
    output: "preview-home-featured.png",
    label: "Trabajos destacados",
    crop: { x: 240, y: 2190, width: 1180, height: 1500 }
  },
  {
    source: "trabajos.png",
    output: "preview-work-grid.png",
    label: "Portafolio editorial",
    crop: { x: 240, y: 1250, width: 1180, height: 1700 }
  },
  {
    source: "servicios.png",
    output: "preview-services-grid.png",
    label: "Servicios a medida",
    crop: { x: 240, y: 1330, width: 1180, height: 1300 }
  },
  {
    source: "servicios.png",
    output: "preview-contact-form.png",
    label: "FAQ y formulario de contacto",
    crop: { x: 240, y: 3350, width: 1180, height: 1220 }
  }
];

const mimeTypes = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg"
};

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

function readPngDimensions(buffer) {
  const pngSignature = "89504e470d0a1a0a";
  if (buffer.subarray(0, 8).toString("hex") !== pngSignature) {
    throw new Error("Solo se admiten capturas PNG.");
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20)
  };
}

function createImageServer() {
  return createServer(async (request, response) => {
    try {
      const url = new URL(request.url ?? "/", baseUrl);
      const filename = path.basename(decodeURIComponent(url.pathname));
      const filePath = path.join(imageDir, filename);
      const data = await readFile(filePath);
      response.setHeader("Content-Type", mimeTypes[path.extname(filePath)] ?? "application/octet-stream");
      response.end(data);
    } catch {
      response.statusCode = 404;
      response.end("Not found");
    }
  });
}

async function listen(server) {
  await new Promise((resolve) => server.listen(port, "localhost", resolve));
}

async function close(server) {
  await new Promise((resolve) => server.close(resolve));
}

await mkdir(imageDir, { recursive: true });

for (const crop of crops) {
  const sourcePath = path.join(imageDir, crop.source);
  if (!(await exists(sourcePath))) {
    throw new Error(`No existe ${sourcePath}. Coloca las capturas originales antes de recortar.`);
  }
}

const server = createImageServer();
await listen(server);

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });

try {
  for (const item of crops) {
    const sourcePath = path.join(imageDir, item.source);
    const dimensions = readPngDimensions(await readFile(sourcePath));
    const { x, y, width, height } = item.crop;

    if (x + width > dimensions.width || y + height > dimensions.height) {
      throw new Error(`El recorte "${item.label}" excede las dimensiones de ${item.source}.`);
    }

    await page.setViewportSize({ width, height });
    await page.setContent(
      `<!doctype html>
      <html lang="es">
        <head>
          <meta charset="utf-8" />
          <style>
            html,
            body {
              margin: 0;
              width: ${width}px;
              height: ${height}px;
              overflow: hidden;
              background: #fbfaf7;
            }

            img {
              position: absolute;
              left: -${x}px;
              top: -${y}px;
              width: ${dimensions.width}px;
              height: ${dimensions.height}px;
              max-width: none;
            }
          </style>
        </head>
        <body>
          <img src="${baseUrl}/${item.source}" alt="${item.label}" />
        </body>
      </html>`,
      { waitUntil: "load" }
    );

    await page.waitForFunction(
      () => Array.from(document.images).every((image) => image.complete && image.naturalWidth > 0),
      { timeout: 30_000 }
    );

    await page.screenshot({
      path: path.join(imageDir, item.output),
      fullPage: false
    });

    console.log(`Generado: docs/assets/readme/${item.output}`);
  }
} finally {
  await browser.close();
  await close(server);
}

await rm(path.join(imageDir, ".gitkeep"), { force: true });

