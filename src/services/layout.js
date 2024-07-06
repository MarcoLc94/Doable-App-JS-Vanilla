import { getTasks, filterTasks, deleteTask, toggleTask } from "./store.js";

// Exporta renderTasks para que pueda ser importado en store.js
export function renderTasks() {
  const tasks = getTasks();
  const mainContent = document.querySelector("#main-content");

  if (!mainContent) {
    console.error("No se encontró el contenedor de tareas.");
    return;
  }

  mainContent.innerHTML = ""; // Limpiar contenido actual

  tasks.forEach((task) => {
    mainContent.innerHTML += `
      <li class="expense ${task.completed ? "completed" : ""}">
        <input type="checkbox" ${task.completed ? "checked" : ""} />
        <div>
          <p>${task.description}</p>
          <p>${task.date}</p>
        </div>
        <button class="delete-task">Delete</button>
      </li>
    `;
  });

  // Agrega los eventos a los checkboxes
  mainContent.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const taskElement = event.target.closest(".expense");
      if (taskElement) {
        toggleTask(taskElement); // Actualiza el estado de la tarea
      }
    });
  });

  // Agrega los eventos a los botones de eliminar
  mainContent.querySelectorAll(".delete-task").forEach((button) => {
    button.addEventListener("click", (event) => {
      const taskElement = event.target.closest(".expense");
      if (taskElement) {
        deleteTask(taskElement); // Llama a deleteTask
      }
    });
  });
}

// Maneja los cambios en los filtros
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();

  document.querySelector("#sort-tasks").addEventListener("change", (e) => {
    filterTasks(e.target.value);
  });
});
