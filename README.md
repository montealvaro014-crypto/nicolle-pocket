# Nicolle Pocket — Edición Recuerdos & Minijuegos PRO

Proyecto web interactivo en React/Vite para escritorio y móvil.

## Novedades de esta edición

- Álbum profesional organizado por año y mes.
- Filtros: línea de tiempo, fotos, videos y favoritos.
- Subida de fotos y videos desde el dispositivo.
- Los recuerdos subidos se guardan en **IndexedDB del navegador**: al actualizar la página siguen allí en el mismo navegador/dispositivo.
- Edición de título, fecha, historia, favorito y eliminación.
- Audios personalizados incluidos para **Pikachu, Jigglypuff y Vulpix** usando los MP3 entregados por el usuario.
- Los demás Pokémon siguen usando sus cries de PokéAPI cuando están disponibles.
- 5 minijuegos rediseñados con niveles progresivos (1–10), objetivos, recompensas y progreso persistente.
- Controles físicos y teclado para mover al Pokémon por el mapa.

## Minijuegos

1. Atrapa Corazones — reflejos, objetivo y tiempo.
2. Parejas Pokémon — memoria con más parejas conforme sube el nivel.
3. Jardín Mágico — crecimiento progresivo del jardín.
4. Estrellas de Nicolle — desafío de velocidad con tiempo.
5. Pastelería Rosa — pedidos de ingredientes y dificultad creciente.

Los niveles de los minijuegos se guardan en localStorage.

## Ejecutar en Windows

Abre CMD o PowerShell dentro de la carpeta del proyecto y ejecuta:

```cmd
npm install
npm run dev
```

IMPORTANTE: el comando es `npm install` (sin letras antes de npm).

Luego abre la dirección que muestre Vite, normalmente:

`http://localhost:5173/`

## ¿Necesita base de datos?

Para que las fotos/videos sobrevivan a F5 o cerrar y abrir el navegador **en el mismo dispositivo**, no hace falta un servidor: esta versión usa IndexedDB, que sí es una base de datos local del navegador.

Si se quiere que los mismos recuerdos aparezcan también en otro celular/computador o después de borrar los datos del navegador, entonces sí conviene conectar almacenamiento en la nube (por ejemplo Supabase/Firebase/Cloudinary + base de datos).

## Audios incluidos

- `public/audio/pikachu.mp3`
- `public/audio/jigglypuff.mp3`
- `public/audio/vulpix.mp3`

No se modifican ni recodifican: el proyecto reproduce esos archivos directamente.
