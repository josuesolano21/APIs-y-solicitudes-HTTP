import * as ejercicios from "./JS/index.js";
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

async function menu() {
  while (true) {
    console.log("\n===== MENÚ - APIs y Solicitudes HTTP =====");
    console.log("4. Solicitud 4 - Crear publicación");
    console.log("5. Solicitud 5 - Crear comentario");
    console.log("6. Solicitud 6 - Actualizar publicación (PUT)");
    console.log("7. Solicitud 7 - PATCH (modificar un campo)");
    console.log("8. Solicitud 8 - DELETE (eliminar una publicación)");
    console.log("9. Solicitud 9 - Verificar recurso eliminado");
    console.log("10. Solicitud 10 - GET general y comparación de respuestas");
    console.log("E1. Enunciado 1 - Usuarios activos y sus publicaciones");
    console.log("0. Salir");

    const opcion = prompt("Elige una opción: ").trim();

    switch (opcion) {
      case "4":
        await ejercicios.crearPublicacion();
        break;
      case "5":
        await ejercicios.crearComentario();
        break;
      case "6":
        await ejercicios.actualizarPost();
        break;
      case "7":
        await ejercicios.patchPost();
        break;
      case "8":
        await ejercicios.deletePost();
        break;
      case "9":
        await ejercicios.getPostEliminado();
        break;
      case "10":
        await ejercicios.getGeneral();
        break;
      case "E1":
        await ejercicios.usuariosConPublicaciones();
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
