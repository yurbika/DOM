const button = document.getElementById("button");
let cnt = 1;
button.addEventListener("click", () => {
  console.log(cnt);
  return button.addEventListener("keypress", () => alert(cnt++));
});
