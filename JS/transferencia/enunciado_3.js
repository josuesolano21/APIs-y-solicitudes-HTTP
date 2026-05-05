/*Enunciado 3: (Búsqueda específica de información)
Un usuario del sistema desea consultar información puntual sobre una publicación
específica y conocer si existe interacción asociada a ella.
Requerimientos:
• Consultar todas las publicaciones.
• Buscar una publicación específica por su identificador.
• Consultar los comentarios relacionados con esa publicación.
• Validar si existen o no comentarios asociados.
Datos de entrada:

• ID de la publicación a consultar
• Endpoint de publicaciones (posts)
• Endpoint de comentarios (comments)

Datos de salida:
• Información detallada de la publicación:
o Título
o Contenido
o Número de comentarios asociados*/

const buscarPublicacion = async (id) => {

  // Consultar publicaciones
    const allAnswer = await fetch('http://localhost:3000/posts'); //Todos los post de db.json
    const all = await allAnswer.json();
    console.log("Todas las publicaciones:", all);

  // Buscar publicación por id
    const postRes = await fetch(`http://localhost:3000/posts/${id}`);
    const post = await postRes.json();  
    console.log("Publicación específica:", post);

  // Consultar comentarios de la publicación
    const allComments = await fetch(`http://localhost:3000/comments?postId=${id}`);
    const comments = await allComments.json();
    console.log("Comentarios asociados:", comments);

  // Validar comentarios
    if (comments.length > 0) {
    console.log(`Existen ${comments.length} comentario(s) asociados.`);
    } else {
    console.log("No existen comentarios asociados a esta publicación.");
    }

    console.log("Título:", post.title);
    console.log("Contenido:", post.body);
    console.log("Número de comentarios:", comments.length);
}

export { buscarPublicacion };