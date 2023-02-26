var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");
var a5 = document.getElementById("a5");

a1.addEventListener('click', function() {
    a2.classList.remove('active');
    a3.classList.remove('active');
    a4.classList.remove('active');
    a5.classList.remove('active');
    this.classList.add('active');
});
a2.addEventListener('click', function() {
    a1.classList.remove('active');
    a3.classList.remove('active');
    a4.classList.remove('active');
    a5.classList.remove('active');
    this.classList.add('active');
});
a3.addEventListener('click', function() {
    a1.classList.remove('active');
    a2.classList.remove('active');
    a4.classList.remove('active');
    a5.classList.remove('active');
    this.classList.add('active');
});
a4.addEventListener('click', function() {
    a1.classList.remove('active');
    a2.classList.remove('active');
    a3.classList.remove('active');
    a5.classList.remove('active');
    this.classList.add('active');
});
a5.addEventListener('click', function() {
    a1.classList.remove('active');
    a2.classList.remove('active');
    a3.classList.remove('active');
    a4.classList.remove('active');
    this.classList.add('active');
});

const spans = document.querySelectorAll('.progress-bar span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});