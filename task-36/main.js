const ele = document.querySelector("button");

//get the styles
const styles = window.getComputedStyle(ele);

//the size without padding and border
const height =
  ele.clientHeight -
  parseFloat(styles.paddingTop) -
  parseFloat(styles.paddingBottom);
const width =
  ele.clientWidth -
  parseFloat(styles.paddingRight) -
  parseFloat(styles.paddingLeft);

// The size include padding
const clientHeight = ele.clientHeight;
const clientWidth = ele.clientWidth;

// The size include padding and border
const offsetHeight = ele.offsetHeight;
const offsetWidth = ele.offsetWidth;

// The size include padding, border and margin
const heightWithMargin =
  ele.offsetHeight +
  parseFloat(styles.marginTop) +
  parseFloat(styles.marginBottom);
const widthWithMargin =
  ele.offsetWidth +
  parseFloat(styles.marginLeft) +
  parseFloat(styles.marginRight);
