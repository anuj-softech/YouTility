// content.js
(function() {
    function changeSpeed(amount) {
        let video = document.querySelector('video');
        if (video) {
            video.playbackRate = Math.max(0.25, Math.min(video.playbackRate + amount, 4));
            showSpeedPopup(video.playbackRate);
        }
    }

    function showSpeedPopup(speed) {
        let popup = document.getElementById('yt-speed-popup');
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'yt-speed-popup';
            document.body.appendChild(popup);
        }
        popup.textContent = `Speed: ${speed.toFixed(2)}x`;
        popup.style.position = 'fixed';
        popup.style.top = '10px';
        popup.style.left = '10px';
        popup.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        popup.style.color = 'white';
        popup.style.padding = '5px 10px';
        popup.style.borderRadius = '5px';
        popup.style.fontSize = '14px';
        popup.style.zIndex = '9999';

        clearTimeout(popup.timer);
        popup.timer = setTimeout(() => popup.remove(), 1000);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === '+') {
            changeSpeed(0.25);
        } else if (event.key === '-') {
            changeSpeed(-0.25);
        }
    });
})();
