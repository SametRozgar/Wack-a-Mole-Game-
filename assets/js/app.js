let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole, 500);
  setInterval(setPlant, 500);
}

function getRandomTile() {
  return Math.floor(Math.random() * 9).toString();
}

function setMole() {
  if (gameOver) return;

  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "assets/images/monty-mole.png";

  let num;
  do {
    num = getRandomTile();
  } while (currPlantTile && currPlantTile.id == num);

  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) return;

  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }

  let plant = document.createElement("img");
  plant.src = "assets/images/piranha-plant.png";

  let num;
  do {
    num = getRandomTile();
  } while (currMoleTile && currMoleTile.id == num);

  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) return;

  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currPlantTile) {
    document.getElementById("score").innerText = "GAME OVER " + score.toString();
    gameOver = true;

    // Görselleri temizle
    if (currMoleTile) currMoleTile.innerHTML = "";
    if (currPlantTile) currPlantTile.innerHTML = "";
  }
}
