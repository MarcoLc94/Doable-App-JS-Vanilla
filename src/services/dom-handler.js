import { addTask, deleteTask, toggleTask } from "./store.js";
import { renderTasks } from "./layout.js";

// Maneja el evento de agregar tareas
document.querySelector(".inputs .button").addEventListener("click", () => {
  const description = document.querySelector('input[type="text"]').value;
  const date = document.querySelector('input[type="date"]').value;
  if (description && date) {
    addTask(description, date);
    renderTasks();
  }
});

// Maneja la eliminación de tareas
document.querySelector("#main-content").addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-task")) {
    const taskElement = event.target.closest(".expense");
    if (taskElement) {
      deleteTask(taskElement);
    }
  }
});

// Maneja el cambio en el estado de las tareas
document.querySelector("#main-content").addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const taskElement = event.target.closest(".expense");
    if (taskElement) {
      toggleTask(taskElement);
    }
  }
});
