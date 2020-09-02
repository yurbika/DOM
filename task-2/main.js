let ele = document.querySelector("input");

ele.addEventListener("keypress", (e) => {
  if (e.which < "A".charCodeAt(0) || e.keyCode > "z".charCodeAt(0))
    e.preventDefault();
});

//important charCodeAt is to ASCII
//fromCharCode is to String back

//It looks good but isn't enough since user is still able to paste or drag unsupported characters to the input.
//These cases can be handled by the input event:
// Track the current value
let currentValue = ele.value || "";

ele.addEventListener("input", function (e) {
  const target = e.target;

  // If users enter supported character (digits or space)
  /^[0-9\s]*$/.test(target.value)
    ? // Backup the current value
      (currentValue = target.value)
    : // Otherwise, restore the value
      // Note that in this case, `e.preventDefault()` doesn't help
      (target.value = currentValue);
});
