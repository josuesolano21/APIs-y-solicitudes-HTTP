/*Enunciado 4: (Eliminación lógica y validación de datos)
Antes de eliminar una publicación, el sistema debe validar si dicha publicación tiene
comentarios asociados. Si tiene comentarios, no debe eliminarse; de lo contrario, puede
proceder.

Requerimientos:
• Consultar las publicaciones.
• Consultar los comentarios.
• Verificar si una publicación específica tiene comentarios.
• Si no tiene comentarios, ejecutar la eliminación.
• Validar el resultado mediante una nueva consulta.

Datos de entrada:
• ID de la publicación
• Endpoint de publicaciones (posts)
• Endpoint de comentarios (comments)

Datos de salida:
• Mensaje de resultado:
o “Publicación eliminada correctamente”
o “No se puede eliminar la publicación porque tiene comentarios”*/

// GET, lógica y DELETE.

const DelPublicacion = async (id) => {
  //Consultar publicaciones
    const respuestaPublicaciones = await fetch('http://localhost:3000/posts');
    const publicaciones = await respuestaPublicaciones.json();
    console.log("Publicaciones:", publicaciones);

  //Consultar comentarios Body
    const respuestaComentarios = await fetch(`http://localhost:3000/comments?postId=${id}`); //buscar comentario
    const comentarios = await respuestaComentarios.json();
    console.log("Comentarios:", comentarios);

  //Verificar comentarios
    if (comentarios.length > 0) {
    console.log("Error: No se puede eliminar la publicación porque tiene comentarios");
    } else {
    //Eliminar
    await fetch(`http://localhost:3000/posts/${id}`, { //borrar comentario
        method: 'DELETE',
    });

    console.log("Publicación eliminada.");

    //Nueva consulta
    const respuestaValidacion = await fetch('http://localhost:3000/posts');
    const publicacionesActualizadas = await respuestaValidacion.json();
    console.log("Publicaciones después de eliminar:", publicacionesActualizadas);
    }
}

export { DelPublicacion };

