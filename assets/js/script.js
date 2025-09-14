const container = document.getElementById("container");
const colorInput = document.getElementById("color-input");
const randomizeCheckbox = document.getElementById("randomize-checkbox");
const showGridCheckbox = document.getElementById("show-grid-checkbox");

let color = colorInput.value;
let numberOfTiles = 16; //square per side;
let containerLength = 600; //px per side

//define container width and height
container.style.width = `${containerLength}px`;
container.style.height = `${containerLength}px`;

const createGridBy = (gridSize) => {
  const divToAdd = document.createDocumentFragment();
  for (let i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "tile";
    newDiv.style.width = `${containerLength / numberOfTiles}px`;
    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor = randomizeCheckbox.checked
        ? `rgb(${Math.random() * 255},${Math.random() * 255} ,${
            Math.random() * 255
          })`
        : `${colorInput.value}`;
    });
    divToAdd.appendChild(newDiv);
  }
  container.appendChild(divToAdd);
  checkGridDisplay();
};

const clearGrid = () => {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    container.removeChild(tile);
  });
};

const clearAndCreateGrid = () => {
  clearGrid();
  createGridBy(numberOfTiles);
};

const changeGridSize = () => {
  temp = numberOfTiles;
  numberOfTiles = parseInt(prompt("Enter grid size (<= 100)"));
  while (numberOfTiles > 100) {
    numberOfTiles = parseInt(prompt("Please enter a number below 100"));
  }
  if (!numberOfTiles) {
    numberOfTiles = temp;
    return;
  }
  clearGrid();
  createGridBy(numberOfTiles);
  checkGridDisplay();
};

const showGrid = () => {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    tile.style.border = "1px solid lightgray";
  });
};

const hideGrid = () => {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    tile.style.border = "0px";
  });
};

const checkGridDisplay = () => {
  showGridCheckbox.checked ? showGrid() : hideGrid();
};

showGridCheckbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    showGrid();
  } else {
    hideGrid();
  }
});

createGridBy(numberOfTiles);
