const ele = document.getElementById("scroll");
const child = document.getElementById("last");

const isVisible = (container, ele) => {
  const eleTop = ele.offsetTop;
  const eleBottom = eleTop + ele.clientHeight;

  const containerTop = container.scrollTop;
  const containerBottom = containerTop + container.clientHeight;

  return (
    (eleTop >= containerTop && eleBottom <= containerBottom) ||
    (eleTop < containerTop && containerTop < eleBottom) ||
    (eleTop < containerBottom && containerBottom < eleBottom)
  );
};

const isVisible2 = (container, ele) => {
  const { bottom, height, top } = ele.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  console.log(
    "top",
    top,
    "bottom",
    bottom,
    "height",
    height,
    containerRect.top,
    containerRect.bottom
  );
  return top <= containerRect.top
    ? containerRect.top - top <= height
    : bottom - containerRect.bottom <= height;
};

ele.addEventListener("scroll", () => {
  console.log(isVisible(ele, child));
  isVisible2(ele, child);
});
