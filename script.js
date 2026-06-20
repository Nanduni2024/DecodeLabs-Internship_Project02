const menuToggle = document.querySelector("#menuToggle");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"], .footer a[href^="#"], .hero-actions a[href^="#"], .deal-inner a[href^="#"], .cart-pill[href^="#"]');
const checkoutForm = document.querySelector("#checkoutForm");
const formStatus = document.querySelector("#formStatus");
const cartCount = document.querySelector("#cartCount");
const summaryItems = document.querySelector("#summaryItems");
const summaryTotal = document.querySelector("#summaryTotal");
const cartNote = document.querySelector("#cartNote");
const addButtons = document.querySelectorAll(".add-cart");

let cartItems = 0;
let cartTotal = 0;

function closeMenu() {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

function toggleMenu() {
    const isOpen = navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

function updateCart(productName) {
    cartCount.textContent = String(cartItems);
    summaryItems.textContent = String(cartItems);
    summaryTotal.textContent = `$${cartTotal.toFixed(2)}`;
    cartNote.textContent = productName
        ? `${productName} added. Keep building your room refresh or checkout now.`
        : "Add products from the shop section to begin your order.";
}

menuToggle.addEventListener("click", toggleMenu);

document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) {
        closeMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));

        if (!target) {
            return;
        }

        event.preventDefault();
        closeMenu();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.closest(".product-card");
        const name = product.dataset.name;
        const price = Number(product.dataset.price);

        cartItems += 1;
        cartTotal += price;
        button.textContent = "Added";
        button.classList.add("added");
        updateCart(name);

        window.setTimeout(() => {
            button.textContent = "Add";
            button.classList.remove("added");
        }, 1200);
    });
});

checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(checkoutForm);
    const name = formData.get("name").trim();

    formStatus.textContent = cartItems
        ? `Thanks, ${name}. Your order request has been received.`
        : `Thanks, ${name}. Add a product above to complete your order.`;

    checkoutForm.reset();
});

const revealItems = document.querySelectorAll(".category-card, .product-card, .benefit-list article, .checkout-form");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.16 }
);

revealItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(18px)";
    item.style.transition = "opacity 500ms ease, transform 500ms ease";
    revealObserver.observe(item);
});
