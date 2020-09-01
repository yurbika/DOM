const textArea = document.querySelector("textarea");

const scrollable = (ele) => {
  const scrollableContent = ele.scrollHeight > ele.clientHeight;

  // It's not enough because the element's `overflow-y` style can be set as
  // * `hidden`
  // * `hidden !important`
  // In those cases, the scrollbar isn't shown
  const overflowYStyle = window.getComputedStyle(ele).overflowY;
  const isOverflowHidden = overflowYStyle.indexOf("hidden") !== -1;

  return scrollableContent && !isOverflowHidden;
};
