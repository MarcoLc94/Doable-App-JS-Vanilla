import { renderTasks } from "./layout.js";

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

export function addTask(description, date) {
  tasks.push({ description, date, completed: false });
  saveTasks();
  renderTasks();
}

export function toggleTask(taskElement) {
  if (!taskElement) return;

  const index = Array.from(taskElement.parentElement.children).indexOf(
    taskElement
  );
  if (index === -1) return;

  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

export function deleteTask(taskElement) {
  if (!taskElement || !taskElement.parentElement) return;

  const index = Array.from(taskElement.parentElement.children).indexOf(
    taskElement
  );
  if (index === -1) return;

  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

export function getTasks() {
  return tasks;
}

export function filterTasks(criteria) {
  if (criteria === "Alpabetically (A - Z)") {
    tasks.sort((a, b) => a.description.localeCompare(b.description));
  } else if (criteria === "Due date") {
    tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (criteria === "Importance") {
    tasks.sort((a, b) => a.completed - b.completed); // Ejemplo simple de importancia
  }
  saveTasks();
  renderTasks();
}

export function loadTasks() {
  renderTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
