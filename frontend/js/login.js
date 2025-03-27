document.getElementById("form-login").addEventListener("submit", async function (e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;
    try {
      const respuesta = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          usuario: usuario,
          password: clave
        })
      });
      const data = await respuesta.json();
      if (respuesta.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", usuario);
        window.location.href = "componentes.html";
      } else {
        document.getElementById("mensaje-error").style.display = "block";
      }
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      alert("Error de conexión. Verifica que el servidor esté en funcionamiento.");
    }
  });