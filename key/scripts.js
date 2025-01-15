document.getElementById('BuyButton').addEventListener('click', function() {
 window.open("https://www.roblox.com/games/116740566274645/Super-skidibi-tycoon"); 
});
document.getElementById('SkipButton').disabled = true;

setTimeout(function() {
    document.getElementById('SkipButton').disabled = false;
    document.getElementById('SkipButton').addEventListener('click', function() {
        window.location.replace("https://keyyy.blitzedzz.workers.dev/");
    });
}, 10000);
