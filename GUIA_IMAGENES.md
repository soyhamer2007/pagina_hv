# 📸 Guía de Imágenes - ESTRUCTURA DE CARPETAS

## Ubicación de Imágenes

Todas las imágenes deben ir en la carpeta **`src/assets/`**

```
src/
├── assets/
│   ├── logo.png                 ← Logo de la institución (80x80 o mayor)
│   ├── banner-left.png          ← Imagen izquierda del banner
│   ├── banner-right.png         ← Imagen derecha del banner
│   ├── content-image-1.jpg      ← Imagen contenido principal
│   ├── content-image-2.jpg      ← Imagen contenido principal
│   ├── content-image-3.jpg      ← Imagen contenido principal
│   ├── google-play-qr.png       ← Código QR o imagen de descarga
│   └── (otras imágenes)
└── components/
    ├── Header.jsx
    ├── Sidebar.jsx
    ├── MainContent.jsx
    └── Footer.jsx
```

## Pasos para Agregar Tus Imágenes

### 1️⃣ **Logo Principal**
- Paste tu imagen en: `src/assets/logo.png`
- Actualiza [Header.jsx](../src/components/Header.jsx) línea 11
- Cambia: `src="path/to/your/logo.png"` → `src={import('./assets/logo.png')}`

### 2️⃣ **Imágenes del Banner (Encabezado)**
- `src/assets/banner-left.png` (bandera peruana, decoración izquierda)
- `src/assets/banner-right.png` (bandera peruana, decoración derecha)
- Actualiza [Header.jsx](../src/components/Header.jsx) líneas 22-23

### 3️⃣ **Imágenes de Contenido Principal**
- 3 imágenes en: `src/assets/content-image-1.jpg`, etc.
- Se mostrarán en la galería del contenido principal
- Actualiza [MainContent.jsx](../src/components/MainContent.jsx) líneas 30-43

### 4️⃣ **Código QR o Botón de Descarga**
- `src/assets/google-play-qr.png`
- Para descargar desde Google Play
- Actualiza [MainContent.jsx](../src/components/MainContent.jsx) línea 58

## 🔄 Cómo Reemplazar las Rutas en los Componentes

### Ejemplo en Header.jsx:
```jsx
// ANTES:
<img src="path/to/your/logo.png" alt="Logo Institucional" />

// DESPUÉS:
import logoImg from './assets/logo.png';
<img src={logoImg} alt="Logo Institucional" />
```

### Ejemplo en MainContent.jsx:
```jsx
// ANTES:
<img src="path/to/content-image-1.jpg" alt="Imagen de contenido 1" />

// DESPUÉS:
import contentImg1 from './assets/content-image-1.jpg';
<img src={contentImg1} alt="Imagen de contenido 1" />
```

## 📋 Especificaciones Recomendadas

| Imagen | Tamaño Recomendado | Formato | Notas |
|--------|-------------------|---------|-------|
| Logo | 80x80 o 100x100 | PNG con fondo transparente | Circular preferiblemente |
| Banner (bandera) | 50x50 | PNG o JPG | 2 imágenes (izquierda y derecha) |
| Contenido | 400x300 (mín) | JPG o PNG | 3 imágenes para la galería |
| QR/Google Play | 100x100 | PNG | Código QR o logo de Google Play |

## 🚀 Para Pegar las Imágenes

1. Abre la carpeta `src/assets/` en el explorador de archivos
2. Copia y pega tus imágenes ahí
3. Actualiza las rutas en los componentes (como se muestra arriba)
4. ¡Guarda y recarga la página!

## 📝 Notas Importantes

- Las imágenes deben estar en la carpeta `src/assets/`
- Los nombres de archivo deben ser en minúsculas (ej: `logo.png`, no `Logo.PNG`)
- Usa formatos: PNG, JPG, JPEG, GIF, WebP
- Para mejor performance, comprime las imágenes antes de subirlas
- En React, importa las imágenes como módulos para mejor optimización

¿Necesitas ayuda? Avísame qué imágenes ya tienes y te ayudaré a integrarlas. 📱
