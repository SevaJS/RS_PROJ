const container = document.querySelector('.container');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');

let currentSlideIndex = 0;
const numberOfSlides = rightSlide.querySelectorAll('div').length;
const height = container.clientHeight;

leftSlide.style.top = `-${(numberOfSlides - 1) * 100}vh`;
upButton.addEventListener('click', () => {
    changeSlide('up')
});
downButton.addEventListener('click', () => {
    changeSlide('down')
});

changeSlide = (direction) => {
    if (direction === 'up') {
        currentSlideIndex === numberOfSlides - 1 ? currentSlideIndex = 0 : currentSlideIndex++;
    } else if (direction === 'down') {
        currentSlideIndex === 0 ? currentSlideIndex = numberOfSlides - 1 : currentSlideIndex--;
    }
    rightSlide.style.transform = `translateY(-${currentSlideIndex * height}px)`;
    leftSlide.style.transform = `translateY(${currentSlideIndex * height}px)`;
}

document.onwheel = function (event) {
    if (event.deltaY < 0) {
        changeSlide('up');
    } else {
        changeSlide('down');
    }
}
