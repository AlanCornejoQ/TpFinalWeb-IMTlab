const contenedor = document.getElementById("contenedor-componentes");
async function cargarComponentes() {
  try {
    const respuesta = await fetch("http://localhost:5000/api/componentes");

    if (!respuesta.ok) throw new Error("Error al obtener componentes");

    const componentes = await respuesta.json();
    mostrarComponentes(componentes);

  } catch (error) {
    console.error(error);
    contenedor.innerHTML = "<p>Error al cargar los componentes.</p>";
  }
}
function mostrarComponentes(lista) {
  contenedor.innerHTML = "";

  lista.forEach((comp) => {
    const card = document.createElement("div");
    card.classList.add("card-componente");

    const btn = document.createElement("button");

    if (comp.estado === "Disponible") {
      btn.textContent = "Prestar";
      btn.addEventListener("click", () => crearPrestamo(comp.id));
    } else {
      btn.textContent = "No disponible";
      btn.disabled = true;
    }

    card.innerHTML = `
      <h3>${comp.nombre}</h3>
      <p><strong>Tipo:</strong> ${comp.tipo}</p>
      <p><strong>Estado:</strong> ${comp.estado}</p>
    `;

    card.appendChild(btn);
    contenedor.appendChild(card);
  });
}

// Verificación de token al prestar
function crearPrestamo(idComponente) {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Debes iniciar sesión primero para prestar un componente.");
    window.location.href = "login.html";
    return;
  }

  alert("Aquí iría el formulario/modal para prestar el componente ID: " + idComponente);
}
cargarComponentes();

// Mostrar u ocultar  "Cerrar sesión"
const token = localStorage.getItem("token");
const liCerrarSesion = document.getElementById("cerrar-sesion");
if (token && liCerrarSesion) {
  liCerrarSesion.style.display = "inline";
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
}
