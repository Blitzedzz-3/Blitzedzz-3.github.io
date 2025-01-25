document.getElementById('PayWithRobux').addEventListener('click', function () {
    const overlay = document.getElementById('paymentOverlay');
    overlay.style.display = 'flex';

    fetch('https://cors-roblox.blitzedzz.workers.dev/') // PROXY FOR FETCHING FROM ROBLOX
        .then(response => response.json())
        .then(data => {
            const gameStatus = data[0];
            const robuxButton = document.getElementById('PayWithRobux');
            const robuxMessage = document.getElementById('robuxMessage');

            if (!gameStatus.isPlayable) {
                robuxButton.textContent = 'Pay with Robux (UNAVAILABLE)';
                robuxButton.disabled = true;
                robuxButton.style.cursor = 'not-allowed';
                robuxMessage.textContent = 'This game is currently unavailable.';
            } else {
                robuxButton.textContent = 'Pay with Robux';
                robuxButton.disabled = false;
                robuxButton.style.cursor = 'pointer';
                robuxMessage.textContent = '';
                window.open('https://www.roblox.com/games/121134309039012/test-v2-ZOMBIE-GAME-BETA');
            }
        })
        .catch(error => {
            console.error('Error fetching game status:', error);
        });
});


document.getElementById('PayWithBTC').addEventListener('click', async function () {
    window.open('https://pay-link.s3.us-west-2.amazonaws.com/index.html?uid=3a3b60532c4348d7');
});





document.getElementById('BuyButton').addEventListener('click', function () {
    const overlay = document.getElementById('paymentOverlay');
    overlay.style.display = 'flex';
});

document.getElementById('paymentOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
