const textboxEle = document.getElementById("textbox");
const messageEle = document.getElementById("message");

textboxEle.addEventListener("keydown", function (e) {
  const capsLockOn = e.getModifierState("CapsLock");

  // Update the content of message
  messageEle.innerHTML = capsLockOn ? "Caps lock is ON" : "";

  // Show or hide the message based on the CapsLock state
  messageEle.style.display = capsLockOn ? "block" : "none";
});
