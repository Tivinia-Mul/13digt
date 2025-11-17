console.log("Script loaded.");
 
//This is the java codes for making "image carousel" or "slideshow."
 
 let slideIndex = 0;
 
function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide img');
    // **Aesthetic change: Use a class for visual transition (like fade)**
    slides.forEach(slide => {
        slide.classList.remove('active'); // Remove 'active' from all
    });
 
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Change for 1-based index consistency in the next line
    }
    // Corrected to use 0-based index for the NodeList
    let currentSlideIndex = slideIndex - 1;
 
    if (slides[currentSlideIndex]) {
        // **Aesthetic change: Add the 'active' class instead of setting display**
        // The CSS will handle the transition/fade between 'active' and non-active state.
        slides[currentSlideIndex].classList.add('active');
    }
 
    setTimeout(showSlides, 2000);
}
 



function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide img');
   
    // **Aesthetic change: Remove 'active' from the currently visible slide**
    // Find the current active slide (based on the previous slideIndex)
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.remove('active');
    }
   
    slideIndex += n;
   
    if (slideIndex < 1) {
        slideIndex = slides.length;
    } else if (slideIndex > slides.length) {
        slideIndex = 1;
    }
   
    // **Aesthetic change: Add 'active' to the new slide**
    slides[slideIndex - 1].classList.add("active");
}
 
// Initialize the slideshow
// We need to set the initial index to 0 so the first call to showSlides increments it to 1
// and correctly selects the first slide (index 0).
showSlides();
 
 
const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.navbar ul');
 
menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});