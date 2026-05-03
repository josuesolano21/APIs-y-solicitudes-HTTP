/*Solicitud 5: Realice una solicitud POST para registrar un nuevo comentario relacionado con
una publicación.*/

const crearComentario = async (obj) => {
    const solicitud = await fetch('http://localhost:3000/comments', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    });
    const respuesta = await solicitud.json();
    console.log(respuesta);
}

export { crearComentario };