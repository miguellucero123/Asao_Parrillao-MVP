# 🚀 Cómo subir tu web a Internet (Gratis con Netlify)

Sigue estos pasos para tener tu web online y recibiendo cotizaciones en 5 minutos.

## Opción 1: Subida Manual (Drag & Drop) - ¡La más fácil!

1.  **Construir el proyecto**:
    Abre tu terminal en la carpeta del proyecto y ejecuta:
    ```bash
    npm run build
    ```
    Esto creará una carpeta llamada `dist` en tu proyecto. Esa carpeta contiene tu web lista.

2.  **Ir a Netlify**:
    *   Entra a [netlify.com](https://www.netlify.com/) y regístrate (es gratis).

3.  **Subir la web**:
    *   Una vez dentro de tu panel de Netlify, verás una zona que dice **"Drag and drop your site output folder here"**.
    *   Arrastra la carpeta `dist` (la que creaste en el paso 1) y suéltala ahí.

4.  **¡Listo!**:
    *   Netlify te dará un enlace (ej: `asao-parrillao.netlify.app`). ¡Tu web ya está online!
    *   **IMPORTANTE**: El formulario de contacto funcionará automáticamente. Los mensajes llegarán a tu panel de Netlify (Forms) y te avisarán por correo.

## Opción 2: Conectar con GitHub (Recomendado para actualizaciones)

Si usas GitHub, es mejor conectar el repositorio.

1.  Sube tu código a GitHub.
2.  En Netlify, crea un "New site from Git".
3.  Elige tu repositorio `App_AP`.
4.  En "Build command" pon: `npm run build`
5.  En "Publish directory" pon: `dist`
6.  Dale a "Deploy site".

## ✅ Verificar el Formulario

1.  Una vez online, ve a la sección de Contacto.
2.  Envía un mensaje de prueba.
3.  Revisa tu correo o el panel de "Forms" en Netlify. ¡Debería aparecer ahí!

---

**Nota sobre la V Región**:
Ya hemos actualizado todos los textos para indicar que el servicio es en la V Región de Valparaíso.
