/* Archivo Barril Para Exportar Solicitudes 

Ejemplo:

// cliente/apropiacion/index.js
// Barril de apropiacion - exporta todas las funciones de cada parte

export { obtenerUsuarios, obtenerUsuarioPorId, obtenerPostsPorUsuario } from "./parte1-get.js";
export { crearPost, crearComentario } from "./parte2-post.js";
export { actualizarPost, modificarCampoPost } from "./parte3-put-patch.js";
export { eliminarPost } from "./parte4-delete.js";
export { verificarRecursoEliminado, compararRespuestas } from "./parte5-analisis.js";

*/

export { crearPublicacion } from "./solicitud_4.js";