let ele = document.querySelector("input");

ele.addEventListener("keypress", (e) => {
  if (e.which < "A".charCodeAt(0) || e.keyCode > "z".charCodeAt(0))
    e.preventDefault();
});

//important charCodeAt is to ASCII
//fromCharCode is to String back
