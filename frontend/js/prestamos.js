const token = localStorage.getItem("token");
if (!token) {
  alert("Debes iniciar sesión para ver tus préstamos.");
  window.location.href = "login.html";
}

const cuerpoTabla = document.getElementById("tabla-prestamos-body");

// Calcular dias
function calcularDiasRestantes(fechaDevolucion) {
  const hoy = new Date();
  const devolucion = new Date(fechaDevolucion);
  const diferencia = devolucion - hoy;
  return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
}

// Mostrar tabla
function mostrarPrestamos(lista) {
  cuerpoTabla.innerHTML = "";

  lista.forEach((prestamo) => {
    const dias = calcularDiasRestantes(prestamo.fechaDevolucion);
    const estado = dias >= 0 ? "Por devolver" : "Vencido";

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${prestamo.componente}</td>
      <td>${prestamo.fechaPrestamo}</td>
      <td>${prestamo.fechaDevolucion}</td>
      <td>${dias} días</td>
      <td>${estado}</td>
    `;
    cuerpoTabla.appendChild(fila);
  });
}
async function obtenerPrestamos() {
  try {
    const respuesta = await fetch("http://localhost:5000/api/prestamos/mios", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!respuesta.ok) throw new Error("No se pudieron obtener los préstamos");

    const prestamos = await respuesta.json();
    mostrarPrestamos(prestamos);
  } catch (error) {
    console.error(error);
    cuerpoTabla.innerHTML = "<tr><td colspan='5'>Error al cargar los préstamos.</td></tr>";
  }
}
obtenerPrestamos();

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
}