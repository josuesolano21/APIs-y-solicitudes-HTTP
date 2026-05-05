/*Solicitud 10: Realice una solicitud GET general y compare la estructura de la respuesta con
las solicitudes anteriores, identificando cambios y comportamientos del servicio.*/

export const getGeneral = async () => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "GET",
  });

  const data = await response.json();

  console.log(`Status: ${response.status} - ${response.statusText}`);
  console.log(`Total de posts: ${data.length}`);
  console.log("Estructura de la respuesta:", data);
};