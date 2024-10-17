const imgElement = document.querySelector('.hero img');

let isMouseOver = false;

imgElement.addEventListener('animationiteration', () => {
    if (imgElement.classList.contains('spinning')) {
        if (!isMouseOver) {
            imgElement.classList.remove('spinning');
            imgElement.classList.add('img-shake');
            console.log('%c EMOJI: STOP SPINNING, START SHAKING ', 'background: #222; color: #fbc527');
        } else {
            imgElement.classList.remove('spinning');
            imgElement.classList.add('spinning');
            console.log('%c EMOJI: KEEP SPINNING, MOUSE STILL OVER', 'background: #222; color: #fbc527');
        }
    }
});

imgElement.addEventListener('mouseover', () => {
    isMouseOver = true;
    imgElement.classList.add('spinning');
    imgElement.classList.remove('img-shake');
    console.log('%c EMOJI: STARTED SPINNING, MOUSE OVER', 'background: #222; color: #fbc527');
});

imgElement.addEventListener('mouseout', () => {
    isMouseOver = false;
    console.log('%c EMOJI: MOUSE NOT OVER', 'background: #222; color: #fbc527');
});
