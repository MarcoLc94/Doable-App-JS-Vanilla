import "./src/services/dom-handler.js";
import { loadTasks } from "./src/services/store.js"; // Asegúrate de importar loadTasks desde store.js
import "./src/services/layout.js";
import "./src/services/loader.js";

document.addEventListener("DOMContentLoaded", () => {
  loadTasks(); // Asegúrate de llamar a loadTasks aquí
});
