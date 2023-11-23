document.addEventListener('DOMContentLoaded', function () {
    
    var circles = document.querySelectorAll('.header__desktop__info__slider__3dbtn__slider__cicles__item');
    var dataFirst = document.querySelector('.header__desktop__info__slider__3dbtn__slider__data__first');
    var leftBtn = document.querySelector('.header__desktop__info__slider__3dbtn__slider__leftbtn');
    var rightBtn = document.querySelector('.header__desktop__info__slider__3dbtn__slider__rightbtn');

    function updateData() {
        var activeCircle = document.querySelector('.header__desktop__info__slider__3dbtn__slider__cicles__item.active');

        if (activeCircle) {
            dataFirst.textContent = activeCircle.dataset.number || "";
        }
    }

    circles[0].classList.add('active');
    updateData();

    leftBtn.addEventListener('click', function () {
        var activeCircle = document.querySelector('.header__desktop__info__slider__3dbtn__slider__cicles__item.active');

        if (activeCircle && activeCircle.previousElementSibling) {
            activeCircle.classList.remove('active');
            var prevCircle = activeCircle.previousElementSibling;
            prevCircle.classList.add('active');
            updateData();
        }
    });

    rightBtn.addEventListener('click', function () {
        var activeCircle = document.querySelector('.header__desktop__info__slider__3dbtn__slider__cicles__item.active');

        if (activeCircle && activeCircle.nextElementSibling) {
            activeCircle.classList.remove('active');
            var nextCircle = activeCircle.nextElementSibling;
            nextCircle.classList.add('active');
            updateData();
        }
    });

    
var imageIndices = [0, 1, 2];
shuffle(imageIndices);

var currentIndex = 0; 

document.getElementById('leftBtn').addEventListener('click', function () {
    changeImage('left');
});

document.getElementById('rightBtn').addEventListener('click', function () {
    changeImage('right');
});

function changeImage(direction) {
    var totalImages = 3; 

    if (direction === 'left') {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    } else {
        currentIndex = (currentIndex + 1) % totalImages;
    }

    
    highlightButton(direction + 'Btn');

    
    var currentImg = document.querySelector('.main__desktop__slider__slier__block__currentimg img');
    var newImg1 = document.querySelector('.main__desktop__slider__slier__block__firstimg img');
    var newImg3 = document.querySelector('.main__desktop__slider__slier__block__thirdimg img');

    currentImg.src = getImageSrc(currentIndex);
    newImg1.src = getImageSrc((currentIndex + 1) % totalImages);
    newImg3.src = getImageSrc((currentIndex + 2) % totalImages);
}


function getImageSrc(index) {
    
    if (index === 0) {
        return "./svg/first_img.svg";
    } else if (index === 1) {
        return "./svg/second_img.svg";
    } else {
        return "./svg/third_img.svg";
    }
}

function highlightButton(buttonId) {
    
    var buttons = document.querySelectorAll('.main__desktop__slider__slier__block__leftbtn, .main__desktop__slider__slier__block__rightbtn');
    buttons.forEach(function (button) {
        button.classList.remove('clicked');
    });

    
    document.getElementById(buttonId).classList.add('clicked');
}


function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}


});