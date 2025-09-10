// Referencias a elementos del DOM
const input = document.getElementById("tareaInput");
const boton = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");

// Evento para agregar tarea
boton.addEventListener("click", () => {
  const texto = input.value.trim();

  if (texto !== "") {
    // Crear elementos
    const li = document.createElement("li");
    li.textContent = texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");

    // Evento para eliminar tarea
    btnEliminar.addEventListener("click", () => {
      lista.removeChild(li);
    });

    // Agregar botón al <li>
    li.appendChild(btnEliminar);

    // Agregar tarea a la lista
    lista.appendChild(li);

    // Limpiar input
    input.value = "";
  } else {
    alert("Por favor escribe una tarea");
  }
});
