/*Solicitud 9: Repita una solicitud GET sobre el recurso eliminado o modificado y analice la
respuesta obtenida.*/

export const getPostEliminado = async () => {
  const response = await fetch("http://localhost:3000/posts/8", {
    method: "GET",
  });

  if (response.ok) {
    const data = await response.json();
    console.log("Recurso encontrado:", data);
  } else {
    console.log(`El recurso no existe. Status: ${response.status} - ${response.statusText}`);
  }
};
