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

//SOlicitud 5

import { crearComentario } from "./JS/index.js";

crearComentario({
  postId: 1,
  name: "Sara Rojas",
  email: "sararojas3315656@gmail.com",
  body: "actualización comentario"
});