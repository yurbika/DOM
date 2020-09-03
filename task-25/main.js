let textArea = document.querySelector("textarea");
let div = document.createElement("div");
document.body.appendChild(div);

textArea.addEventListener("input", () => {
  div.innerText = textArea.value.length;
});

console.log();
