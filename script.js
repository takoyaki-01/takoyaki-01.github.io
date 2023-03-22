//Menu function
const menu = document.getElementById('menu');
const navlink = document.getElementById('navlink');
const overlay = document.getElementById('overlay');
const close = document.getElementById('close');

let menuOpen = false;

function openMenu() {
  menuOpen = true;
  overlay.style.display = 'block';
  navlink.style.width = '150px';
  menu.style.display = 'none';
}

function closeMenu() {
  menuOpen = false;
  overlay.style.display = '';
  navlink.style.width = '';
  menu.style.display = '';
}

menu.addEventListener('click', function () {
  if (!menuOpen) {
    openMenu();
  }
});

close.addEventListener('click', function () {
  if (menuOpen) {
    closeMenu();
  }
});

window.addEventListener ('resize', function () {
  if (menuOpen) {
    closeMenu();
  }
});


//Slideshow function
//let slideIndex = 1;
//showSlides(slideIndex);

//function plusSlides(n) {
// showSlides(slideIndex += n);
//}


//function currentSlide(n) {
//  showSlides(slideIndex = n);
///}

//function showSlides(n) {
// let i;
//  let slides = document.getElementsByClassName("slideshowimg");
//  if (n > slides.length) {
//    slideIndex = 1;
//  }
//  if (n < 1) {
//    slideIndex = slides.length;
//  }
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  slides[slideIndex-1].style.display = "block";
//}



//Carousel slideshow
const slideshow = document.querySelector('.slideshow');
const slideshowImages = document.querySelectorAll('.slideshow img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;

let size = slideshowImages[0].clientWidth;

slideshow.style.transform = 'translateX('+ (-size * counter) + 'px)';

prevBtn.addEventListener('click', function () {
  if (counter <= 0) return;
  slideshow.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slideshow.style.transform = 'translateX('+ (-size * counter) + 'px)';
});

nextBtn.addEventListener('click', function() {
  if (counter >= slideshowImages.length - 1) return;
  slideshow.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slideshow.style.transform = 'translateX('+ (-size * counter) + 'px)';
});

slideshow.addEventListener('transitionend', function() {
  if (slideshowImages[counter].id === 'lastClone') {
   slideshow.style.transition = "none";
   counter = slideshowImages.length - 2;
    slideshow.style.transform = 'translateX('+ (-size * counter) + 'px)';
  }
 if (slideshowImages[counter].id === 'firstClone') {
  slideshow.style.transition = "none";
  counter = slideshowImages.length - counter;
  slideshow.style.transform = 'translateX('+ (-size * counter) + 'px)';
 }
});

window.addEventListener('resize', function() {
  slideshow.style.transition = "none";
  size = slideshowImages[0].clientWidth;
  slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});