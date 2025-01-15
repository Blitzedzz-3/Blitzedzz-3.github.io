document.getElementById('PayWithRobux').addEventListener('click', function () {
    const overlay = document.getElementById('paymentOverlay');
    overlay.style.display = 'flex';

    fetch('https://corsproxy.io/?url=https://games.roblox.com/v1/games/multiget-playability-status?universeIds=6445496101')
        .then(response => response.json())
        .then(data => {
            const gameStatus = data[0];
            const robuxButton = document.getElementById('PayWithRobux');
            const robuxMessage = document.getElementById('robuxMessage');

            if (gameStatus.isPlayable !== "true") {
                robuxButton.textContent = 'Pay with Robux (UNAVAILABLE)';
                robuxButton.disabled = true;
                robuxButton.style.cursor = 'not-allowed';
                robuxMessage.textContent = 'This game is currently unavailable.';
            } else {
                robuxButton.textContent = 'Pay with Robux';
                robuxButton.disabled = false;
                robuxButton.style.cursor = 'pointer';
                robuxMessage.textContent = '';
                window.open('https://www.roblox.com/games/116740566274645/Super-skidibi-tycoon');
            }
        })
        .catch(error => {
            console.error('Error fetching game status:', error);
        });
});

document.getElementById('PayWithCoinbase').addEventListener('click', async function () {
    try {
        const response = await fetch('https://cold-bar-3c39.blitzedzz.workers.dev/create-charge', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "Vipper Trolling GUI Premium",
                description: "Vipper Trolling GUI PREMIUM",
                amount: "5.00",
                currency: "USD"
            })
        });

        const data = await response.json();
        if (response.ok) {
            window.location.href = data.data.hosted_url;
        } else {
            alert('Failed to generate payment link. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching Coinbase payment link:', error);
        alert('An error occurred. Please try again.');
    }
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
