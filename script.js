
const dropDown = document.querySelector(".bottom-drop-down1")
const chevronList = document.querySelector(".chevron-list");


dropDown.addEventListener("click", () => {
    chevronList.style.display = "block"
})

dropDown.addEventListener("mouseleave", () => {
chevronList.style.display = "none"
})

const scrollContainer = document.querySelector(".test-swipe")
const scrollContainer2 = document.querySelector(".dates-list")
const nextBtn = document.querySelector("#nextBtn")
const backBtn = document.querySelector("#backBtn")
const items = document.querySelectorAll(".item")
const nextBtn2 = document.querySelector('#nextBtn2')
const backBtn2 = document.querySelector('#backBtn2')



let currentIndexs = 0;

nextBtn.addEventListener('click', () => {
    currentIndexs++;
    if (currentIndexs >= items.length) {
        currentIndexs = 0; // Loop back to the first item
    }
    updateCarousel();
    scrollContainer.style.transition = '0.5s ease';
});

nextBtn2.addEventListener('click', () => {
    currentIndexs++;
    if (currentIndexs >= items.length) {
        currentIndexs = 0; // Loop back to the first item
    }
    updateCarousel();
    scrollContainer2.style.transition = '0.5s ease';
});

backBtn.addEventListener('click', () => {
    currentIndexs--;
    if (currentIndexs <= items.length) {
        currentIndexs = 0; // Loop back to the first item
    }
    updateCarousel();
    scrollContainer.style.transition = '0.5s ease';
});
backBtn2.addEventListener('click', () => {
    currentIndexs--;
    if (currentIndexs <= items.length) {
        currentIndexs = 0; // Loop back to the first item
    }
    updateCarousel();
    scrollContainer2.style.transition = '0.5s ease';
});


function updateCarousel() {
    const offset = -currentIndexs * 100; // Adjust based on item width
    scrollContainer.style.transform = `translateX(${offset}px)`;
    scrollContainer2.style.transform = `translateX(${offset}px)`;
}


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
