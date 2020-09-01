let button = document.getElementById("button");
const f = () => alert("button has no event anymore");
button.addEventListener("click", f);
button.removeEventListener("click", f);
