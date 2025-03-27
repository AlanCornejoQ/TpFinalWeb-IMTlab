// Verificar si hay token
const token = localStorage.getItem("token");
if (!token) {
  alert("Debes iniciar sesión primero.");
  window.location.href = "login.html";
}
const contenedor = document.getElementById("contenedor-componentes");

// Llamar y mostrar componentes
async function cargarComponentes() {
  try {
    const respuesta = await fetch("http://localhost:5000/api/componentes", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!respuesta.ok) throw new Error("Error al obtener componentes");

    const componentes = await respuesta.json();
    mostrarComponentes(componentes);

  } catch (error) {
    console.error(error);
    contenedor.innerHTML = "<p>Error al cargar los componentes.</p>";
  }
}

function mostrarComponentes(lista) {
  contenedor.innerHTML = ""; // Limpiar
  lista.forEach((comp) => {
    const card = document.createElement("div");
    card.classList.add("card-componente");
    card.innerHTML = `
      <h3>${comp.nombre}</h3>
      <p><strong>Tipo:</strong> ${comp.tipo}</p>
      <p><strong>Estado:</strong> ${comp.estado}</p>
      <button onclick="crearPrestamo(${comp.id})">Prestar</button>
    `;
    contenedor.appendChild(card);
  });
}
//PRESTAMO DE COMPONENTES
function crearPrestamo(idComponente) {
  
  alert("la logica de crear prestamo: " + idComponente);
}


cargarComponentes();
