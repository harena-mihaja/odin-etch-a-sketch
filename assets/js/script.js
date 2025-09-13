const container = document.getElementById("container");
const divToAdd = document.createDocumentFragment();
let numberOfTiles = 16; //square per side;
let containerLength = 900; //px per side

const setContainerSize = (numberInPixel) => {
  containerLength = numberInPixel;
  return;
};

//dynamically change the container width and height
container.style.width = `${containerLength}px`;
container.style.height = `${containerLength}px`;

const createGridBy = (gridSize) => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "tile";
    newDiv.style.width = `${containerLength / numberOfTiles}px`;
    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor = "red";
    });
    divToAdd.appendChild(newDiv);
  }

  container.appendChild(divToAdd);
};

const clearGrid = () => {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    container.removeChild(tile);
  });
};

const changeGridSize = () => {
  numberOfTiles = parseInt(
    prompt(
      "Enter the number of square per sides. Must be greater or equal than 16 and less or equal 100."
    )
  );
  while (numberOfTiles < 16 || numberOfTiles > 100) {
    numberOfTiles = parseInt(
      prompt("Please enter a number between 16 and 100.")
    );
  }
  clearGrid();
  createGridBy(numberOfTiles);
};

createGridBy(numberOfTiles);
