const button = document.querySelector("button");

const throttle = (func, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return func(...args);
  };
};

button.addEventListener(
  "click",
  throttle(() => console.log(2), 5000)
);
