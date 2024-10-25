
const dropDown = document.querySelector(".bottom-drop-down1")
const chevronList = document.querySelector(".chevron-list");


dropDown.addEventListener("mouseover", () => {
    chevronList.style.display = "block"
})

dropDown.addEventListener("mouseleave", () => {
chevronList.style.display = "none"
})



let slideIndex = 0;
showSlides();

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const slidesWrapper = document.querySelector(".slides-wrapper");
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Change slide every 3 seconds
setInterval(() => {
    slideIndex++;
    showSlides();
}, 3000);


const slider = document.querySelector('.icons-info-list');
const slides = slider.querySelector('.swipe');
let startX, currentIndex = 0;

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
    const moveX = e.touches[0].clientX;
    const diffX = startX - moveX;

    if (diffX > 50) {
        // Swipe left
        currentIndex = Math.min(currentIndex + 1, slides.children.length - 1);
        updateSlider();
    } else if (diffX < -50) {
        // Swipe right
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    }
});

