var birds = document.getElementsByTagName("li");

//the last function in the function is for browser which not support Element.matches()/Element.matchesSelector()
const matches = function (selector, ele) {
  return (
    ele.matches ||
    ele.matchesSelector ||
    ele.msMatchesSelector ||
    ele.mozMatchesSelector ||
    ele.webkitMatchesSelector ||
    ele.oMatchesSelector ||
    (function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    })()
  ).call(ele, selector);
};

console.log(matches(".endangered", birds[1]));
