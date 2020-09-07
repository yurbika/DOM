const getDefaultProperty = function (tagName, property) {
  const ele = document.createElement(tagName);
  document.body.appendChild(ele);
  const styles = window.getComputedStyle(ele);
  const value = styles.getPropertyValue(property);
  document.body.removeChild(ele);

  return value;
};
