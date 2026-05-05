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

import * as ejercicios from "./JS/index.js";
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

async function menu() {
  while (true) {
    console.log("\n===== MENÚ - APIs y Solicitudes HTTP =====");
    console.log("7. Solicitud 7 - PATCH (modificar un campo)");
    console.log("8. Solicitud 8 - DELETE (eliminar una publicación)");
    console.log("9. Solicitud 9 - Verificar recurso eliminado");
    console.log("0. Salir");


    const opcion = prompt("Elige una opción: ").trim();

    switch (opcion) {
      case "7":
        await ejercicios.patchPost();
        break;
      /* introducir siguientes ejercicios aqui con este formato:
      case "8":
        await ejercicios.nombreFuncion();
        break; */
      case "8":
        await ejercicios.deletePost();
        break;
      
        case "9":
        await ejercicios.getPostEliminado();
        break;

      case "0":
        console.log("Hasta luego.");
        process.exit(0);
      default:
        console.log("Opción no válida.");
    }
  }
}

menu();