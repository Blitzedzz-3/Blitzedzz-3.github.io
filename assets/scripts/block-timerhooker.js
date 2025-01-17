(function blockTimerHooker() {
    const nativeSetTimeout = window.setTimeout;
    const nativeSetInterval = window.setInterval;
    const nativeClearTimeout = window.clearTimeout;
    const nativeClearInterval = window.clearInterval;
    const nativeDateNow = Date.now;

    function detectAndRestore(target, key, originalFn) {
        if (target[key] !== originalFn) {
            Object.defineProperty(target, key, {
                configurable: false,
                enumerable: false,
                writable: false,
                value: originalFn,
            });
            console.warn(`[BLOCKER] Restored ${key} to its original implementation.`);
        }
    }

    function disruptTimerHooker() {
        if (window.eHook) {
            Object.defineProperty(window, 'eHook', {
                configurable: false,
                enumerable: false,
                writable: false,
                value: null,
            });
            console.warn('[BLOCKER] eHook detected and disabled.');
        }

        const hookIndicators = ['_intervalIds', '_timeoutIds', '_percentage', '_setTimeout', '_setInterval'];
        hookIndicators.forEach((indicator) => {
            if (window[indicator]) {
                delete window[indicator];
                console.warn(`[BLOCKER] Removed ${indicator} from global scope.`);
            }
        });

        const timerHookerElements = document.querySelectorAll('._th-container, ._th_cover-all-show-times');
        timerHookerElements.forEach((element) => {
            element.remove();
            console.warn('[BLOCKER] Removed TimerHooker UI elements.');
        });
    }

    Object.defineProperty(Object, 'defineProperty', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (target, property, descriptor) {
            if (property === 'setTimeout' || property === 'setInterval' || property === 'Date') {
                throw new Error('[BLOCKER] Unauthorized attempt to redefine critical functions.');
            }
            return Reflect.defineProperty(target, property, descriptor);
        },
    });

    Object.defineProperty(Object, 'defineProperties', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (target, descriptors) {
            const keys = Object.keys(descriptors);
            if (keys.some((key) => ['setTimeout', 'setInterval', 'Date'].includes(key))) {
                throw new Error('[BLOCKER] Unauthorized attempt to redefine critical functions.');
            }
            return Reflect.defineProperties(target, descriptors);
        },
    });

    setInterval(() => {
        detectAndRestore(window, 'setTimeout', nativeSetTimeout);
        detectAndRestore(window, 'setInterval', nativeSetInterval);
        detectAndRestore(window, 'clearTimeout', nativeClearTimeout);
        detectAndRestore(window, 'clearInterval', nativeClearInterval);
        detectAndRestore(Date, 'now', nativeDateNow);
        disruptTimerHooker();
    }, 1000);

    console.log('[BLOCKER] TimerHooker disruptor active.');
})();
