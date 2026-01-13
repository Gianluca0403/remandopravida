document.querySelectorAll(".carousel-premium").forEach((carousel) => {
    let index = 0;
    const slides = carousel.querySelectorAll(".carousel-slide");
    const dots = carousel.querySelectorAll(".dot-premium");
    const prev = carousel.querySelector(".prev-premium");
    const next = carousel.querySelector(".next-premium");

    function showSlide(n) {
        index = (n + slides.length) % slides.length;

        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    prev.addEventListener("click", () => showSlide(index - 1));
    next.addEventListener("click", () => showSlide(index + 1));

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => showSlide(i));
    });
});
