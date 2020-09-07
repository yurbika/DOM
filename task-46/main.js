{
  /* <input type="file" id="upload" />
<div id="size"></div> */
}

// Query the elements
const fileEle = document.getElementById("upload");
const sizeEle = document.getElementById("size");

fileEle.addEventListener("change", function (e) {
  const files = e.target.files;
  if (files.length === 0) {
    // Hide the size element if user doesn't choose any file
    sizeEle.innerHTML = "";
    sizeEle.style.display = "none";
  } else {
    // File size in bytes
    sizeEle.innerHTML = `${files[0].size} B`;

    // Display it
    sizeEle.style.display = "block";
  }
});

// Convert the file size to a readable format
const formatFileSize = function (bytes) {
  const sufixes = ["B", "kB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
};

// Display the file size
sizeEle.innerHTML = formatFileSize(files[0].size);
