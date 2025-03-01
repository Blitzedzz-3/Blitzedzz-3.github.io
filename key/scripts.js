document.getElementById('BuyButton').addEventListener('click', function() {
 window.open("https://vippergui.blitzedzz.xyz/Premium/"); 
});
const skipButton = document.getElementById('SkipButton');
let countdown = 10;
skipButton.disabled = true;
skipButton.textContent = `Skip (${countdown}s)`;
skipButton.style.cursor = "not-allowed";

const timer = setInterval(() => {
    skipButton.textContent = `Skip (${--countdown}s)`;
    if (countdown <= 0) {
        clearInterval(timer);
        skipButton.textContent = "Skip";
        skipButton.disabled = false;
        skipButton.style.cursor = "pointer";
        skipButton.addEventListener('click', () => {
            window.open("https://keyyy.blitzedzz.workers.dev/");
        });
    }
}, 1000);
