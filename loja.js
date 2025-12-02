const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// Criar bolinhas dinamicamente
slides.forEach((_, i) => {
    let dot = document.createElement("div");
    if (i === 0) dot.classList.add("active-dot");
    dotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
        index = i;
        updateSlider();
    });
});

const dots = document.querySelectorAll(".dots div");

// Função principal
function updateSlider() {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active-dot"));

    slides[index].classList.add("active");
    dots[index].classList.add("active-dot");
}

// Botões
prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
});

nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
});

// Automático
setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
}, 5000);
