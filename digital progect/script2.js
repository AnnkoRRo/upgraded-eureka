let offset = 0; // смещение от левого края
const sliderline = document.querySelector('.slider-line');

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset + 1110;
    if (offset > 1348) {
        offset = 0;
    }
    sliderline.style.left = -offset + 'px';
});

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset - 1110;
    if (offset < 0) {
        offset = 1110;
    }
    sliderline.style.left = -offset + 'px';
});

