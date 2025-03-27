const horariosElectronica = [
    { dia: "Lunes", horario: "08:00 - 10:00" },
    { dia: "Miércoles", horario: "10:00 - 12:00" },
    { dia: "Viernes", horario: "14:00 - 16:00" }
  ];
  const horariosMecatronica = [
    { dia: "Martes", horario: "09:00 - 11:00" },
    { dia: "Jueves", horario: "13:00 - 15:00" },
    { dia: "Viernes", horario: "16:00 - 18:00" }
  ];
  function mostrarHorarios(tablaId, listaHorarios) {
    const tabla = document.getElementById(tablaId);
    tabla.innerHTML = "";
    listaHorarios.forEach((item) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${item.dia}</td>
        <td>${item.horario}</td>
      `;
      tabla.appendChild(fila);
    });
  }
  mostrarHorarios("tabla-electronica", horariosElectronica);
  mostrarHorarios("tabla-mecatronica", horariosMecatronica);