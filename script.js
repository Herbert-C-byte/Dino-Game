const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if(dino.classList != "jump"){
    dino.classList.add("jump");

    setTimeout(() => {
    dino.classList.remove("jump");
    }, 300);
  }
  
}

let isAlive = setInterval(function () {
  // get current Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));


  // get current X position
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));


  // Detect collision
  if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Game Over!");
  }
}, 10)

document.addEventListener("keydown", function (event) {
  jump();
})