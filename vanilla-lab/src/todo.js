export function mountTodo(root) {
  const modulo = document.createElement("form");
  const campo = document.createElement("input");
  const elenco = document.createElement("ul");
  campo.name = "testo";

  modulo.append(campo);
  root.append(modulo, elenco);

  modulo.addEventListener("submit", (event) => {
    event.preventDefault();
    const dati = Object.fromEntries(new FormData(modulo));
    const testo = dati.testo.trim();
    if (testo === "") return;

    const voce = document.createElement("li");
    voce.textContent = testo;

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "toggle";
    toggleButton.dataset.action = "toggle";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.dataset.action = "delete";

    voce.append(toggleButton, deleteButton);
    elenco.append(voce);
    modulo.reset();
  });

  elenco.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const voce = button.closest("li");
    if (button.dataset.action === "delete") voce.remove();
    if (button.dataset.action === "toggle") voce.classList.toggle("fatto");
  });
}
