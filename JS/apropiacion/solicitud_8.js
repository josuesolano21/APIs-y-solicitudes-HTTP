/*Solicitud 8: Realice una solicitud DELETE para eliminar una publicación existente.*/

export const deletePost = async () => {
  const response = await fetch("http://localhost:3000/posts/8", {
    method: "DELETE",
  });

  if (response.ok) {
    console.log(`Post eliminado correctamente. Status: ${response.status}`);
  } else {
    console.log(`Error: ${response.status} - recurso no encontrado`);
  }
};