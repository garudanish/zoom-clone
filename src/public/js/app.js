const messageUl = document.querySelector("ul");
const messageForm = document.querySelector("form");

const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log(`Connected to the Server ✅`);
});

socket.addEventListener("message", (message) => {
  console.log(`New Message: ${message.data}`);
});

socket.addEventListener("close", () => {
  console.log("Disconnected from the Server ❌");
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
});
