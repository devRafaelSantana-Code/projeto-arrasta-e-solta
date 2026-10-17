// Estado da Aplicação expandido para 5 caixas
const areas = { a: null, b: null, c: null, d: null, e: null };

// Cache de Elementos do DOM
const neutralArea = document.querySelector(".neutralArea");
const areasContainer = document.querySelector(".areas");
const areaElements = document.querySelectorAll(".area");
const resetBtn = document.getElementById("resetBtn");

// --- Inicialização e Sistema de Embaralhar ---
function initGame() {
   areasContainer.classList.remove("correct");

   const items = Array.from(document.querySelectorAll(".item"));

   for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
   }

   areaElements.forEach((area) => {
      area.innerHTML = "";
   });

   items.forEach((item) => {
      neutralArea.appendChild(item);
   });

   Object.keys(areas).forEach((key) => (areas[key] = null));
}

// --- Event Listeners ---

[neutralArea, areasContainer].forEach((container) => {
   container.addEventListener("dragstart", (e) => {
      if (e.target.classList.contains("item")) {
         e.target.classList.add("dragging", "item-active-drag");
      }
   });

   container.addEventListener("dragend", (e) => {
      if (e.target.classList.contains("item")) {
         e.target.classList.remove("dragging", "item-active-drag");
      }
   });
});

areaElements.forEach((area) => {
   area.addEventListener("dragover", dragOver);
   area.addEventListener("dragleave", toggleHover);
   area.addEventListener("drop", drop);
});

neutralArea.addEventListener("dragover", dragOverNeutral);
neutralArea.addEventListener("dragleave", toggleHover);
neutralArea.addEventListener("drop", dropNeutral);
resetBtn.addEventListener("click", initGame);

// --- Funções de pegar e arrastar ---

function dragOver(e) {
   if (e.currentTarget.children.length === 0) {
      e.preventDefault();
      e.currentTarget.classList.add("hover");
   }
}

function dragOverNeutral(e) {
   e.preventDefault();
   e.currentTarget.classList.add("hover");
}

function toggleHover(e) {
   e.currentTarget.classList.remove("hover");
}

function drop(e) {
   toggleHover(e);
   if (e.currentTarget.children.length === 0) {
      const dragItem = document.querySelector(".item.dragging");
      if (dragItem) {
         e.currentTarget.appendChild(dragItem);
         updateAreas();
      }
   }
}

function dropNeutral(e) {
   toggleHover(e);
   const dragItem = document.querySelector(".item.dragging");
   if (dragItem) {
      e.currentTarget.appendChild(dragItem);
      updateAreas();
   }
}

// --- Lógica de Validação ---

function updateAreas() {
   areaElements.forEach((area) => {
      const name = area.dataset.name;
      const firstChild = area.firstElementChild;
      areas[name] = firstChild ? firstChild.textContent.trim() : null;
   });

   // Validação da sequência correta de 1 a 5
   const isCorrect =
      areas.a === "1" &&
      areas.b === "2" &&
      areas.c === "3" &&
      areas.d === "4" &&
      areas.e === "5";

   areasContainer.classList.toggle("correct", isCorrect);
}

// Inicia o jogo embaralhado automaticamente ao abrir a página
window.addEventListener("DOMContentLoaded", initGame);
