// Countdown Timer
const countdown = document.getElementById("countdown");

// Set the target date to Christmas Eve
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
