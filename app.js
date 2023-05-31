const blockHeight = 20;
const blockWidth = 100;
const grid = document.getElementById("grid");

class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

const blocks = [new Block(10, 270)];

function addBlocks() {
  for (let i = 0; i > blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = "50px";
    block.style.bottom = "20px";
    grid.appendChild(block);
  }
}

addBlocks();
