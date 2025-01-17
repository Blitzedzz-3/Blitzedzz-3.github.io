const checkmain = async () => {
    try {
        const resp = await fetch("https://alwingulla.com/", { mode: 'no-cors' });
        const text = await resp.text();

        console.log('checkmain(): Site is reachable, no ad blocker detected.');
        return false;
    } catch (e) {
        console.warn('checkmain(): Error accessing site, possible ad blocker or network issue:', e.message);
        return true;
    }
};

const setIntervalCheck = () => {
    return new Promise((resolve) => {
        const timeout = setTimeout(() => {
            resolve(true);
        }, 2000);

        const interval = setInterval(() => {
            const a0b = "a0b";
            if (a0b == "a0b") {
                clearInterval(interval);
                clearTimeout(timeout);
                resolve(false);
            }
        }, 100);
    });
};

const idCheck = async () => {
    const bannerIds = ['AdHeader', 'AdContainer', 'AD_Top', 'homead', 'ad-lead'];
    const bannerString = bannerIds.map((bannerId) => `<div id="${bannerId}">&nbsp;</div>`).join('');
    const dataContainer = document.createElement("div");

    dataContainer.innerHTML = bannerString;
    document.body.append(dataContainer);

    let adblocker = false;

    bannerIds.forEach(id => {
        const elem = document.getElementById(id);

        if (elem) {
            const style = window.getComputedStyle(elem);
            if (elem.offsetHeight == 0 || style.display === 'none' || style.visibility === 'hidden') {
                console.log(`idCheck(): Element with ID "${id}" is hidden.`);
                adblocker = true;
            }
        } else {
            console.log(`idCheck(): Element with ID "${id}" does not exist.`);
            adblocker = true;
        }

        elem?.remove();
    });

    return adblocker;
};

const detectedAdblock = async () => {
    const resp = await Promise.all([
        checkmain(),
        idCheck()
    ]);

    const isNotUsingAdblocker = resp.every(r => r === false);

    console.log('detectedAdblock(): Ad blocker status:', !isNotUsingAdblocker);
    return !isNotUsingAdblocker;
};

detectedAdblock().then(result => {
    if (result) {
        document.body.innerHTML = '';
        
        document.body.style.cssText = `
            background-color: red;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-size: 24px;
        `;

        const container = document.createElement('div');
        container.style.textAlign = 'center';

        const message = document.createElement('p');
        message.textContent = 'Adblocker detected. Please disable your adblocker';

        const button = document.createElement('button');
        button.textContent = "I've disabled my ad blocker";
        button.style.cssText = `
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        `;
        button.onclick = () => location.reload();

        container.appendChild(message);
        container.appendChild(button);
        document.body.appendChild(container);
    } else {
        console.log('No ad blocker detected. Everything is fine!');
    }
});
