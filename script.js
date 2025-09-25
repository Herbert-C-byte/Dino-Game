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
  console.log("Dino element found:", dino);
}