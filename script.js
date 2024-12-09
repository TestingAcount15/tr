// Countdown Timer
const countdown = document.getElementById("countdown");

// Set the target date to Christmas
const targetDate = new Date("Dec 25, 2024 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdown.innerHTML = `🎅 ${days}d ${hours}h ${minutes}m ${seconds}s until Christmas!`;

    if (timeLeft < 0) {
        countdown.innerHTML = "🎉 Merry Christmas! 🎉";
    }
}

// Update every second
setInterval(updateCountdown, 1000);

// Snowfall Effect
const snowfallContainer = document.getElementById("snowfall");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Randomize initial position and animation duration
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = 4 + Math.random() * 6 + "s"; // Between 4s and 10s
    snowflake.style.animationDelay = Math.random() * 5 + "s"; // Up to 5s delay

    snowfallContainer.appendChild(snowflake);

    // Remove snowflake after animation ends
    setTimeout(() => {
        snowflake.remove();
    }, 10000); // Matches maximum animation duration
}

// Generate snowflakes at intervals
setInterval(createSnowflake, 200); // New snowflake every 200ms
