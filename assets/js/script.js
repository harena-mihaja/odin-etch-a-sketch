const container = document.getElementById("container");
const colorInput = document.getElementById("color-input");
const randomizeCheckbox = document.getElementById("randomize-checkbox");
const showGridCheckbox = document.getElementById("show-grid-checkbox");
let isClicked = false;
const defaultSize = 16;
let numberOfTiles = defaultSize; //square per side;
let containerLength = 600; //px per side

//define container width and height
container.style.width = `${containerLength}px`;
container.style.height = `${containerLength}px`;
// Prevent container from being draggable
container.setAttribute("draggable", "false");
container.addEventListener("dragstart", (e) => e.preventDefault());

const createGridBy = (gridSize) => {
  const divToAdd = document.createDocumentFragment();
  for (let i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "tile";
    newDiv.style.width = `${containerLength / numberOfTiles}px`;
    newDiv.setAttribute("draggable", "false");
    newDiv.addEventListener("dragstart", (e) => e.preventDefault());
    divToAdd.appendChild(newDiv);
  }
  container.appendChild(divToAdd);
  checkGridDisplay();
  addDrawingOnTile();
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

const getRandomColor = () => {
  let randomColor = {
    red: Math.random() * 255,
    blue: Math.random() * 255,
    green: Math.random() * 255,
  };
  return randomColor;
};

const addDrawingOnTile = () => {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    let opacity = 0;
    let { red, blue, green } = getRandomColor();
    // Draw on mouseover if mouse is down
    tile.addEventListener("mouseover", () => {
      if (isClicked) {
        if (opacity !== 1) {
          opacity += 0.1;
          tile.style.backgroundColor = randomizeCheckbox.checked
            ? `rgba(${red}, ${blue}, ${green},${opacity})`
            : `${colorInput.value}`;
        }
      }
    });

    // Draw immediately on mousedown
    tile.addEventListener("mousedown", (e) => {
      if (opacity !== 1) {
        opacity += 0.1;
        tile.style.backgroundColor = randomizeCheckbox.checked
          ? `rgba(${red}, ${blue}, ${green},${opacity})`
          : `${colorInput.value}`;
      }
    });
  });
};

container.addEventListener("mousedown", (e) => {
  isClicked = true;
  window.addEventListener("mouseup", () => {
    isClicked = false;
  });
});

const eraser = () => {
  randomizeCheckbox.checked = false;
  colorInput.value = "#ffffff";
};

createGridBy(numberOfTiles);
