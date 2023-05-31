const blockHeight = 20;
const blockWidth = 100;
const grid = document.getElementById("grid");
const userStart = [230, 10];
let userCurrent = userStart;

const ballStart = [270, 35];
let ballCurrent = ballStart;

const gridWidth = 560;

class Block {
  constructor(xAxis, yAxis) {
    //just to see where are rands for ball collisions AND FOR DRAW
    this.bottomLeft = [xAxis, yAxis];

    //just to see where are rands for ball collisions
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),

  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),

  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

addBlocks();
//user positon
const user = document.createElement("div");
user.classList.add("user");
user.style.left = userCurrent[0] + "px";
user.style.bottom = userCurrent[1] + "px";
grid.appendChild(user);

function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (userCurrent[0] > 0) {
        userCurrent[0] -= 10;
        user.style.left = userCurrent[0] + "px";
      }
      break;

    case "ArrowRight":
      if (userCurrent[0] < gridWidth - blockWidth) {
        userCurrent[0] += 10;
        user.style.left = userCurrent[0] + "px";
      }
      break;
  }
}

document.addEventListener("keydown", moveUser);

//add ball
const ball = document.createElement("div");
ball.classList.add("ball");
ball.style.left = ballCurrent[0] + "px";
ball.style.bottom = ballCurrent[1] + "px";
grid.appendChild(ball);
