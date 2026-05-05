/*Solicitud 6: Realice una solicitud PUT para actualizar completamente la información de una
publicación existente.*/

const actualizarPost = async (id, obj) => {
    const solicitud = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    });
    const respuesta = await solicitud.json();
    console.log(respuesta);
}

export { actualizarPost };