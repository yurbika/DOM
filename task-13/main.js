const div = document.querySelector("div");
const ul = document.querySelector("ul");
const span = document.querySelector("span");

const check = (parent, child) => {
  let node = child.parentNode;
  while (node) {
    if (node === parent) return true;
    node = node.parentNode;
  }
  return false;
};

console.log(check(ul, div));
console.log(check(ul, span));

console.log(ul.contains(span));
