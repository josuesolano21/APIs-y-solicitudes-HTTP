// cliente/app.js
// Archivo principal - ejecuta todas las solicitudes

/* ejemplo de uso:
import { 
  obtenerUsuarios, obtenerUsuarioPorId, obtenerPostsPorUsuario,
  crearPost, crearComentario,
  actualizarPost, modificarCampoPost,
  eliminarPost,
  verificarRecursoEliminado, compararRespuestas
} from "./apropiacion/index.js";

// Ejecutar
obtenerUsuarios();
obtenerUsuarioPorId(1);
obtenerPostsPorUsuario(1);
crearPost();
crearComentario();
actualizarPost();
modificarCampoPost();
eliminarPost();
verificarRecursoEliminado();
compararRespuestas();*/

import { actualizarPost } from "./JS/index.js";

actualizarPost(1, {
  userId: 1,
  title: "actualización titulo",
  body: "actualiación contenido"
});