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

export { crearComentario } from "./apropiacion/solicitud_5.js";

export { patchPost } from './apropiacion/solicitud_7.js';

export { deletePost } from './apropiacion/solicitud_8.js';

export { getPostEliminado } from './apropiacion/solicitud_9.js';

export { getGeneral } from './apropiacion/solicitud_10.js';

/*Transferencia */
export { usuariosConPublicaciones } from './transferencia/enunciado_1.js';
