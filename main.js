// Selección de elementos
const inputTarea = document.getElementById('tareaInput');
const botonAgregar = document.getElementById('agregarBtn');
const listaTareas = document.getElementById('listaTareas');

// Función para crear una tarea
function agregarTarea() {
  const valor = inputTarea.value.trim();
  if (valor === "") return;

  const li = document.createElement('li');
  li.textContent = valor;

  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'X';
  botonEliminar.className = 'eliminar';
  botonEliminar.addEventListener('click', () => li.remove());

  li.appendChild(botonEliminar);
  listaTareas.appendChild(li);

  inputTarea.value = '';
}

// Evento del botón
botonAgregar.addEventListener('click', agregarTarea);

// Permitir agregar tarea presionando Enter
inputTarea.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') agregarTarea();
});
