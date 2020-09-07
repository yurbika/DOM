const result = ele.closest(selector);

//for ie
const matches = function (ele, selector) {
  return (
    ele.matches ||
    ele.matchesSelector ||
    ele.msMatchesSelector ||
    ele.mozMatchesSelector ||
    ele.webkitMatchesSelector ||
    ele.oMatchesSelector
  ).call(ele, selector);
};

// Find the closest element to `ele` and matches the `selector`
const closest = function (ele, selector) {
  let e = ele;
  while (e) {
    if (matches(e, selector)) {
      break;
    }
    e = e.parentNode;
  }
  return e;
};
