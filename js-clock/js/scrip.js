let renderTime = function () {
    let time = new Date();
    clock.textContent = time.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    });
};

renderTime();

setInterval(renderTime, 1000);