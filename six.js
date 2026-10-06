const photo = document.getElementById("photo");
const button = document.getElementById("changeButton");

function changePhoto() {
    photo.src = "explode.png";
    button.textContent = "DESTROYED!";
    button.classList.add("destroyed");
}
button.addEventListener("click", changePhoto);
