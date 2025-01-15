document.getElementById('BuyButton').addEventListener('click', function () {
    const overlay = document.getElementById('paymentOverlay');
    overlay.style.display = 'flex';

    fetch('https://games.roblox.com/v1/games/multiget-playability-status?universeIds=6445496101')
        .then(response => response.json())
        .then(data => {
            const gameStatus = data[0];
            const robuxButton = document.getElementById('PayWithRobux');
            const robuxMessage = document.getElementById('robuxMessage');

            if (gameStatus.playabilityStatus !== "Playable") {
                robuxButton.textContent = 'Pay with Robux (UNAVAILABLE)';
                robuxButton.disabled = true;
                robuxButton.style.cursor = 'not-allowed';
                robuxMessage.textContent = 'This game is currently unavailable.';
            } else {
                robuxButton.textContent = 'Pay with Robux';
                robuxButton.disabled = false;
                robuxButton.style.cursor = 'pointer';
                robuxMessage.textContent = '';
            }
        })
        .catch(error => {
            console.error('Error fetching game status:', error);
        });
});

document.getElementById('PayWithCoinbase').addEventListener('click', function () {
    window.open('https://commerce.coinbase.com/checkout/076cc66d-dd0b-48f7-9ed6-c6c297a1df11');
});

document.getElementById('PayWithRobux').addEventListener('click', function () {
    window.open('https://www.roblox.com/games/116740566274645/Super-skidibi-tycoon');
});

document.getElementById('paymentOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
