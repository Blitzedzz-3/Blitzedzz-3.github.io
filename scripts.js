document.getElementById('copyButton').addEventListener('click', function() {
    var scriptText = document.getElementById('robloxScript');
    scriptText.select();
    document.execCommand('copy');
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.textContent = 'Script copied to clipboard!';
    copyMessage.style.opacity = 1;
    setTimeout(function() {
        copyMessage.style.opacity = 0;
    }, 2000);
});

document.getElementById('Contactbutton').addEventListener('click', function() {
    window.location.href = "https://blitzedzz-2.github.io/Support"; 
});

document.getElementById('PremiumButton').addEventListener('click', function() {
    window.location.href = "https://blitzedzz-2.github.io/Premium"; 
});

document.body.addEventListener('mousemove', function(e) {
    const { clientX: mouseX, clientY: mouseY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (mouseX - centerX) / centerX;
    const deltaY = (mouseY - centerY) / centerY;

    document.body.style.transform = `rotateX(${-deltaY * 10}deg) rotateY(${deltaX * 10}deg)`;
});

document.body.addEventListener('mouseleave', function() {
    document.body.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
