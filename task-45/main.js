//Get the previous sibling
const prev = ele.previousSibling;

//Get the next sibling
const next = ele.nextSibling;

//Get all siblings

// Get the parent node
const parent = ele.parentNode;

// Filter the children, exclude the element
const siblings = [].slice.call(parent.children).filter(function (child) {
  return child !== ele;
});
