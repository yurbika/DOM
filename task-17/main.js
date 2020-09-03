const isDateInputSupported = () => {
  const ele = document.createElement("input");
  const invalid = "this-is-not-a-date";
  ele.setAttribute("type", "date");
  ele.setAttribute("value", invalid);
  return ele.value !== invalid;
};

console.log(isDateInputSupported());
