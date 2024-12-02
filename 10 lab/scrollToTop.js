// Mygtuko elementas
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Stebėkite slinkimą ir rodykite/slėpkite mygtuką
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Slinkimo funkcija
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
