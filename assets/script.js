$(document).ready(function() {
  $('.navbar ul li a').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 1000); // The animation will take 1000ms (1 second) to complete.
    return false;
  });
});

const images = document.querySelectorAll('.menu-image');
const fullscreenOverlay = document.getElementById('fullscreen-overlay');
const fullscreenImage = document.getElementById('fullscreen-image');
const closeFullscreen = document.getElementById('close-fullscreen');

images.forEach(image => {
  image.addEventListener('click', function() {
    fullscreenOverlay.style.display = 'flex';
    fullscreenImage.src = this.src;
  });
});

closeFullscreen.addEventListener('click', function() {
  fullscreenOverlay.style.display = 'none';
});

fullscreenOverlay.addEventListener('click', function(e) {
  if (e.target === this) {
    fullscreenOverlay.style.display = 'none';
  }
});
