// LANGUAGE TOGGLE
function setLang(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.placeholder = el.getAttribute('data-' + lang);
        } else {
            el.textContent = el.getAttribute('data-' + lang);
        }
    });
}

// BLOG TOGGLE
function toggleArticle(card) {
    const content = card.querySelector('.blog-content');
    content.style.display = content.style.display === "block" ? "none" : "block";
}

// FADE-IN ON SCROLL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
});