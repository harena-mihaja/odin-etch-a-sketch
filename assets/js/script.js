const container = document.getElementById("container");
const divToAdd = document.createDocumentFragment();

const createGridBy = (gridSize) => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "tile";
    divToAdd.appendChild(newDiv);
  }
  container.appendChild(divToAdd);
};

createGridBy(16);
