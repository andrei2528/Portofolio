let path = document.querySelector('path');
let pathLength = path.getTotalLength();
let svg = document.querySelectorAll('svg');
path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashOffset = pathLength;
window.addEventListener('scroll', () => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;

});



var checkbox = document.querySelector('input[name=theme]');