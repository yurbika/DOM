const button = document.getElementById("button");
let x = 0;
let y = 0;

document.body.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  button.textContent = `x=${
    x - button.offsetLeft - button.offsetWidth / 2
  }\ny=${y - button.offsetTop - button.offsetHeight / 2}`;
});
