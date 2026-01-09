/* ============================
        SLIDER PREMIUM
============================ */
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

// Função principal do slider
function updateSlider() {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active-dot"));

    slides[index].classList.add("active");
    dots[index].classList.add("active-dot");
}

// Botões slider
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


/* ============================
        CARRINHO LATERAL
============================ */

// Carrinho na memória
let carrinho = [];

// Elementos do carrinho
const cartIcon = document.querySelector(".cart-icon");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const cartCount = document.querySelector(".cart-count");
const cartItemsDiv = document.querySelector(".cart-items");
const finishBtn = document.querySelector(".finish-btn");

// Abre o painel do carrinho
cartIcon.addEventListener("click", () => {
    cartPanel.classList.add("open");
});

// Fecha o painel
closeCart.addEventListener("click", () => {
    cartPanel.classList.remove("open");
});

// Adicionar produtos ao carrinho
document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const product = btn.parentElement;

        const nome = product.querySelector("h3").textContent;
        const preco = product.querySelector(".price").textContent;

        carrinho.push({ nome, preco });
        atualizarCarrinho();
    });
});

// Atualiza visualmente o carrinho
function atualizarCarrinho() {
    cartCount.textContent = carrinho.length;

    cartItemsDiv.innerHTML = "";

    carrinho.forEach((item, i) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <span>${item.nome}</span>
            <span>${item.preco}</span>
        `;

        cartItemsDiv.appendChild(div);
    });
}

// Finalizar no WhatsApp
finishBtn.addEventListener("click", () => {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let msg = "Olá! Gostaria de confirmar meu pedido:%0A%0A";

    carrinho.forEach(item => {
        msg += `• ${item.nome} - ${item.preco}%0A`;
    });

    const numero = "556699234563"; // coloque seu número aqui
    const link = `https://wa.me/${numero}?text=${msg}`;

    window.open(link, "_blank");
});
