let offset = 0; // смещение от левого края
const sliderline = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 1170;
    if (offset > 5850) {
        offset = 0;
    }
    sliderline.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 1170;
    if (offset < 0) {
        offset = 5850;
    }
    sliderline.style.left = -offset + 'px';
});

