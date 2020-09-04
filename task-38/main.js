//not supported in ie11
//<a href="/path/to/file" download>Download</a>

// Create a new link
const link = document.createElement("a");
link.download = "file name";
link.href = "/path/to/file";

// Append to the document
document.body.appendChild(link);

// Trigger the click event
link.click();

// Remove the element
document.body.removeChild(link);
