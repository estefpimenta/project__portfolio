
// VIDEO HEADER - executado somento que depois que a janela é carregada

window.addEventListener('load', () => {
    const videoHeader = document.querySelector('.header__card-video');
    const videoFooter = document.querySelector('.footer-video')

    videoHeader.src = './images/video/flowV2.mp4';
    videoHeader.autoplay = true;
    videoHeader.loop = true;
    videoHeader.muted = true;

    videoFooter.src = './images/video/flowV2Inverted.mp4';
    videoFooter.autoplay = true;
    videoFooter.loop = true;
    videoFooter.muted = true;
})

