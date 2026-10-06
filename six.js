const photo = document.getElementById("photo");
const button = document.getElementById("changeButton");

function changePhoto() {
    photo.src = "photo2.jpg";
}

button.addEventListener("click", changePhoto);