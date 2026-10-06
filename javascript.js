const button = document.querySelector("#button");
const message = document.querySelector("#message");

function changeMessage() {
    message.textContent = "Goodbye!";
    message.style.color = "red";
}
button.style.backgroundColor = "pink";
button.addEventListener("click", changebutton);
function changebutton() {
    button.textContent = "Clicked!";
    button.style.backgroundColor = "red";
}

button.addEventListener("click", changeMessage);
