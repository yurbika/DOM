const isDateInputSupported = () => {
  const ele = document.createElement("input");
  const invalid = "this-is-not-a-date";
  ele.setAttribute("type", "date");

  return ele.value !== invalid;
};

console.log(isDateInputSupported());
