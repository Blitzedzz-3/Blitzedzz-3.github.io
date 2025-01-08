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

// Rotate Body Based on Mouse Position
document.body.addEventListener('mousemove', function (e) {
    const { clientX: mouseX, clientY: mouseY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (mouseX - centerX) / centerX;
    const deltaY = (mouseY - centerY) / centerY;

    document.body.style.transform = `rotateX(${-deltaY * 10}deg) rotateY(${deltaX * 10}deg)`;
});

// Reset Body Rotation When Mouse Leaves
document.body.addEventListener('mouseleave', function () {
    document.body.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

// Make the Image Rotate Towards the Cursor
const image = document.getElementById('floatingGuiImage');

// Rotate the image based on cursor position when hovering
image.addEventListener('mousemove', (e) => {
    const rect = image.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    image.style.transform = `rotate(${angle}deg)`;
});

// Reset image rotation when mouse leaves
image.addEventListener('mouseleave', () => {
    image.style.transform = 'rotate(0deg)';
});
