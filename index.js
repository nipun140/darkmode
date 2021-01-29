let sliderId = document.querySelector('.outerSlider');
let circleId = document.querySelector('.innerCircle');
let largeItems = document.querySelectorAll('.largeItem');
let smallItems = document.querySelectorAll('.smallItem');
let h1s = document.querySelectorAll('body h1');
let counts = document.querySelectorAll('.count');
let emails = document.querySelectorAll('.email');

document.querySelector('.outerSlider').onclick = function() {

    sliderId.classList.toggle('animateSliderbgDark')

    document.querySelector('body').classList.toggle('bodyDark');

    document.querySelector('.behindBody').classList.toggle('behindBodyDark');

    for (var i = 0; i < largeItems.length; i++) {
        largeItems[i].classList.toggle('ItemDark');
    }

    for (var i = 0; i < smallItems.length; i++) {
        smallItems[i].classList.toggle('ItemDark');
    }
    for (var i = 0; i < h1s.length; i++) {
        h1s[i].classList.toggle('lightText');
    }

    for (var i = 0; i < counts.length; i++) {
        counts[i].classList.toggle('lightText');
    }
    for (var i = 0; i < emails.length; i++) {
        emails[i].classList.toggle('emailLight');
    }

    if (window.getComputedStyle(circleId, null).getPropertyValue('left') == '23.5px') {
        circleId.style.transition = 'all 0.1s';
        circleId.style.left = '0%';
    } else if (window.getComputedStyle(circleId, null).getPropertyValue('left') == '0px') {
        circleId.style.transition = 'all 0.1s';
        circleId.style.left = '47%';
    }



}