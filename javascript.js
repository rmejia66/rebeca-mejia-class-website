const button = document.querySelector("#button");
const message = document.querySelector("#message");

function changeMessage() {
    message.textContent = "Goodbye!";
}
button.style.backgroundColor = "pink";

button.addEventListener("click", changeMessage);
