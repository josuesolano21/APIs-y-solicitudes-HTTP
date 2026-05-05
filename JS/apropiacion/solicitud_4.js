/*Solicitud 4: Realice una solicitud POST para crear una nueva publicación asociada a un
usuario existente.
Incluya información como título y contenido.*/

const crearPublicacion = async (obj) => {
    const solicitud = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    });
    const respuesta = await solicitud.json();
    console.log(respuesta);
}

export { crearPublicacion };