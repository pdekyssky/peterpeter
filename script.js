document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
  // DOMContentLoaded  end
// carousel
let slides = document.querySelectorAll('.carousel img');
        let currentSlide = 0;
        let timer;

        function showSlide(n) {
            // Hide all slides
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }

            // Display the current slide
            slides[n].style.display = 'block';
        }

        function nextSlide() {
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            showSlide(currentSlide);
        }

        function startCarousel() {
            nextSlide();
            timer = setInterval(nextSlide, 4000);
        }

        function stopCarousel() {
            clearInterval(timer);
        }

        // Start the carousel when the page loads
        window.addEventListener('load', startCarousel);
//lightbox

lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    showImageNumberLabel: false,
    fitImagesInViewport: true,
    maxWidth: 800,
    maxHeight: 800,
    disableScrolling: true,
  });

