# Preparación para producción

## 1. Variables de entorno

Copia `.env.example` como `.env` y reemplaza todos los datos provisionales. `PUBLIC_SITE_URL` debe incluir `https://` y no necesita una barra final.

El formulario funciona en una salida estática: prepara el mensaje en el navegador y lo entrega a WhatsApp o al cliente de correo. No requiere una API ni almacena datos en el servidor.

## 2. Build y validación

```bash
npm ci
npm run check
npm run build
npm run test:e2e
```

Publica el contenido generado en `dist/`.

## 3. Encabezados recomendados para Nginx

Añade estos encabezados dentro del bloque `server` que sirve el sitio. Activa HSTS únicamente cuando HTTPS ya funcione correctamente en todo el dominio.

```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
add_header Cross-Origin-Opener-Policy "same-origin-allow-popups" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header Content-Security-Policy "default-src 'self'; base-uri 'self'; frame-ancestors 'none'; object-src 'none'; img-src 'self' data:; font-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://plausible.io; connect-src 'self' https://plausible.io; upgrade-insecure-requests" always;
```

Si no usas Plausible, elimina `https://plausible.io` de `script-src` y `connect-src`.

## 4. Caché

Los archivos con hash generados por Astro pueden almacenarse durante un año. El HTML debe revalidarse para que las publicaciones nuevas aparezcan sin purgar manualmente todo el sitio.

```nginx
location /_astro/ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

location / {
  try_files $uri $uri/ $uri.html =404;
  add_header Cache-Control "no-cache";
}
```

## 5. Revisión previa al lanzamiento

- Confirmar dominio, correo, teléfono y WhatsApp reales.
- Reemplazar contenido o imágenes editoriales que aún funcionen como referencia.
- Probar los dos canales del formulario desde un teléfono real.
- Configurar TLS, compresión Brotli o gzip y redirección permanente de HTTP a HTTPS.
- Verificar `robots.txt`, `sitemap.xml`, canonical y la vista previa social desde el dominio final.
- Revisar la política de privacidad con el flujo comercial definitivo.
