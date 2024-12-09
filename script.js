// Countdown Timer
const countdown = document.getElementById("countdown");
const christmas = new Date("Dec 25, 2023 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = christmas - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdown.innerHTML = `🎅 ${days}d ${hours}h ${minutes}m ${seconds}s to Christmas!`;
}, 1000);
