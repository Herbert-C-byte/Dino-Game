const dino = document.getElementById("dino");

function jump() {
  dino.classList.add("jump");

  setTimeout(() => {
    dino.classList.remove("jump");
  }, 300);
}

document.addEventListener("keydown", function (event) {
  jump();
})

if(dino) {
  console.log("1 Dino element founded:", dino);
  console.log("Return to code");
}