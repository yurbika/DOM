const input = document.querySelector("input");

//simpler version
const debounce = (func, time) => {
  var timeoutID;
  return function (...args) {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => func(...args), time);
  };
};

//complex with resolve on demand
const debouncer = (func, timer, resolve) => {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;

    var later = () => {
      timeout = null;
      if (!resolve) func.apply(context, args);
    };

    var callNow = resolve && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, timer);

    if (callNow) func.apply(context, args);
  };
};

input.addEventListener(
  "keydown",
  debouncer(() => alert("test"), 2000)
);
