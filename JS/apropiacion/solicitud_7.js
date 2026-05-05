/*Solicitud 7: Realice una solicitud PATCH para modificar únicamente un campo específico
de esa publicación.*/

export const patchPost = async () => {
  const response = await fetch("http://localhost:3000/posts/1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Título actualizado con PATCH",
    }),
  });
 
  const data = await response.json();
  console.log(data);
};

