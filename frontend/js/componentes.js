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

// Abrir modal prestamo
function crearPrestamo(idComponente) {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Debes iniciar sesión primero para prestar un componente.");
    window.location.href = "login.html";
    return;
  }

  document.getElementById("modal-prestamo").style.display = "block";
  document.getElementById("componente-id").value = idComponente;

  const hoy = new Date().toISOString().split("T")[0];
  document.getElementById("fecha-prestamo").value = hoy;
  document.getElementById("fecha-devolucion").value = hoy;
}

// Cerrar modal
function cerrarModal() {
  document.getElementById("modal-prestamo").style.display = "none";
}

// POST
document.getElementById("form-prestamo").addEventListener("submit", async function (e) {
  e.preventDefault();

  const token = localStorage.getItem("token");
  const idComponente = document.getElementById("componente-id").value;
  const fechaPrestamo = document.getElementById("fecha-prestamo").value;
  const fechaDevolucion = document.getElementById("fecha-devolucion").value;

  try {
    const respuesta = await fetch("http://localhost:5000/api/prestamos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        idComponente,
        fechaPrestamo,
        fechaDevolucion
      })
    });

    if (!respuesta.ok) throw new Error("No se pudo registrar el préstamo");

    alert("✅ Préstamo registrado correctamente");
    cerrarModal();
    cargarComponentes(); // Recargar la lista por si cambió el estado
  } catch (error) {
    console.error(error);
    alert("❌ Error al registrar el préstamo");
  }
});

// Mostrar boton "Cerrar sesion" si hay sesion activa
const token = localStorage.getItem("token");
const liCerrarSesion = document.getElementById("cerrar-sesion");
if (token && liCerrarSesion) {
  liCerrarSesion.style.display = "inline";
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
}
cargarComponentes();
