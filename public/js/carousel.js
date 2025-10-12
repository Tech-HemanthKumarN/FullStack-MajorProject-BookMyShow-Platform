document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(carouselTrack.children); // Convert HTMLCollection to Array
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsContainer = document.querySelector('.carousel-nav-dots');

    if (!carouselTrack || slides.length === 0) {
        console.warn('Carousel elements not found or no slides available.');
        return; // Exit if no carousel elements are present
    }

    const slideWidth = slides[0].getBoundingClientRect().width; // Get width of one slide

    // Arrange the slides next to each other
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    // Create dots for navigation
    if (dotsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        });
    }

    const dots = dotsContainer ? Array.from(dotsContainer.children) : [];

    // Function to move to a specific slide
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    // Function to update dots
    const updateDots = (currentDot, targetDot) => {
        if (!currentDot || !targetDot) return;
        currentDot.classList.remove('active');
        targetDot.classList.add('active');
    };

    // Next button click
    nextButton.addEventListener('click', () => {
        const currentSlide = document.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsContainer ? document.querySelector('.carousel-nav-dots .active') : null;
        const nextDot = currentDot ? currentDot.nextElementSibling : null;

        if (nextSlide && nextSlide.classList.contains('carousel-slide')) { // Ensure it's a slide
            moveToSlide(carouselTrack, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);
        } else { // Loop back to the first slide
            moveToSlide(carouselTrack, currentSlide, slides[0]);
            updateDots(currentDot, dots[0]);
        }
    });

    // Previous button click
    prevButton.addEventListener('click', () => {
        const currentSlide = document.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsContainer ? document.querySelector('.carousel-nav-dots .active') : null;
        const prevDot = currentDot ? currentDot.previousElementSibling : null;

        if (prevSlide && prevSlide.classList.contains('carousel-slide')) { // Ensure it's a slide
            moveToSlide(carouselTrack, currentSlide, prevSlide);
            updateDots(currentDot, prevDot);
        } else { // Loop back to the last slide
            moveToSlide(carouselTrack, currentSlide, slides[slides.length - 1]);
            updateDots(currentDot, dots[dots.length - 1]);
        }
    });

    // Dot navigation
    if (dotsContainer) {
        dotsContainer.addEventListener('click', e => {
            const targetDot = e.target.closest('.dot');
            if (!targetDot) return;

            const currentIndex = dots.findIndex(dot => dot.classList.contains('active'));
            const targetIndex = dots.findIndex(dot => dot === targetDot);
            const targetSlide = slides[targetIndex];

            if (targetSlide) {
                moveToSlide(carouselTrack, document.querySelector('.current-slide'), targetSlide);
                updateDots(dots[currentIndex], targetDot);
            }
        });
    }

    // Optional: Auto-play functionality
    let autoPlayInterval;
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(() => {
            nextButton.click(); // Simulate a click on the next button
        }, 5000); // Change slide every 5 seconds
    };

    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
    };

    startAutoPlay();

    // Pause auto-play on hover
    carouselTrack.addEventListener('mouseenter', stopAutoPlay);
    carouselTrack.addEventListener('mouseleave', startAutoPlay);
});