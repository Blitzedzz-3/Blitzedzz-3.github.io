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


document.getElementById('PayWithNowPayments').addEventListener('click', async function () {
    try {
        const response = await fetch('https://cold-bar-3c39.blitzedzz.workers.dev/create-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                price_amount: 3999.5,
                price_currency: "usd",
                pay_currency: "btc",
                ipn_callback_url: "https://blitzedzz-2.github.io/ipn/",
                order_id: "Vipper trolling gui",
                order_description: "lol",
            }),
        });

        const data = await response.json();
        if (response.ok && data.invoice_url) {
            // Redirect user to the NOWPayments invoice
            window.location.href = data.invoice_url;
        } else {
            alert('Failed to create payment: ' + (data.error || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
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
