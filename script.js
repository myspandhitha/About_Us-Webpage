let index = 0;
const slides = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
const wrapper = document.getElementById("testimonialWrapper");
const totalSlides = Math.ceil(slides.length / 3); // Number of groups (3 cards per slide)

function showSlide(n) {
    index = n;
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
}

function changeSlide(n) {
    showSlide(n);
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

setInterval(nextSlide, 3000); // Auto slide every 3 seconds
