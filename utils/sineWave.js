export function initializeSineWave(canvas) {
    /*const canvas = document.getElementById('sineWaveCanvas');*/
    const ctx = canvas.getContext('2d');
    const computedStyle = getComputedStyle(document.documentElement);

    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    let time = 0;
    const waveHeight = parseInt(computedStyle.getPropertyValue('--sine-wave-height'), 10);
    const waveSpeed = parseFloat(computedStyle.getPropertyValue('--sine-wave-speed'), 0.5);
    const waveColor = computedStyle.getPropertyValue('--sine-wave-color').trim();

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let i = 0; i < canvas.width; i++) {
            ctx.lineTo(i, canvas.height / 2 + Math.sin(i * 0.05 + time) * waveHeight);
        }

        ctx.strokeStyle = waveColor;
        ctx.stroke();
        time += waveSpeed;

        requestAnimationFrame(draw);
    };

    draw();
}
