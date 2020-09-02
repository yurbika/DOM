let ele = document.querySelector("div");

let clone = ele.cloneNode(true);

// Using the cloneNode(true) method will deep copy a given element. In the sample code above, all attributes and children of the original node ele will be cloned in cloned as well.

// Passing false produces a cloned node that keeps only the attributes and the original node:
const cloned = ele.cloneNode(false);
