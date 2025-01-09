// Copy Script to Clipboard
document.getElementById('copyButton').addEventListener('click', function () {
    var scriptText = document.getElementById('robloxScript');
    scriptText.select();
    document.execCommand('copy');
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.textContent = 'Script copied to clipboard!';
    copyMessage.style.opacity = 1;
    setTimeout(function () {
        copyMessage.style.opacity = 0;
    }, 2000);
});

// Redirect to Contact Page
document.getElementById('Contactbutton').addEventListener('click', function () {
    window.location.href = "https://blitzedzz-2.github.io/Support";
});

// Redirect to Premium Page
document.getElementById('PremiumButton').addEventListener('click', function () {
    window.location.href = "https://blitzedzz-2.github.io/Premium";
});
