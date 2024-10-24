
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
