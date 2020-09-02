// Send data from an iframe to its parent window
// Called from the iframe
const message = JSON.stringify({
  message: "Hello from iframe",
  date: Date.now(),
});
window.parent.postMessage(message, "*");

//Send data from a page to its child iframe
// Called from the page
frameEle.contentWindow.postMessage(message, "*");

//In the iframe or main page, you can listen on the message event to receive the sent data:
window.addEventListener("message", function (e) {
  // Get the sent data
  const data = e.data;

  // If you encode the message in JSON before sending them,
  // then decode here
  // const decoded = JSON.parse(data);
});

//If you send or receive message from different iframes,
//you can include a parameter to indicate where the message comes from.

// From a child iframe
const message = JSON.stringify({
  channel: "FROM_FRAME_A",
});
window.parent.postMessage(message, "*");

//Then in the main page, you can distinguish the messages by looking at the parameter:
window.addEventListener("message", function (e) {
  const data = JSON.parse(e.data);
  // Where does the message come from
  const channel = data.channel;
});
