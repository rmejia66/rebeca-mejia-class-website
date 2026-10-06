const buttons = document.querySelectorAll(".mood-btn");
const flower = document.querySelector("#flower");
const title = document.querySelector("#mood-title");
const message = document.querySelector("#mood-message");

function changeMood(mood) {
    flower.classList.add("grow");

    if (mood === "happy") {
        document.body.style.backgroundColor = "#fff3b0";
        flower.textContent = "🌻";
        title.textContent = "Feeling Happy!";
        message.textContent = "Your garden is full of sunshine and positive energy.";
    }

    if (mood === "calm") {
        document.body.style.backgroundColor = "#caf0f8";
        flower.textContent = "🪷";
        title.textContent = "Feeling Calm";
        message.textContent = "Take a breath, slow down, and enjoy a peaceful moment.";
    }

    if (mood === "energetic") {
        document.body.style.backgroundColor = "#ffc8dd";
        flower.textContent = "🌺";
        title.textContent = "Feeling Energetic!";
        message.textContent = "Your garden is bursting with energy and excitement!";
    }

    setTimeout(function () {
        flower.classList.remove("grow");
    }, 500);
}

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const mood = button.dataset.mood;
        changeMood(mood);
    });
});