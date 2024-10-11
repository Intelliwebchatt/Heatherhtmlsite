// Animate On Scroll Initialization
AOS.init({
    duration: 1000,
    once: true
});

// Animate.css Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate__animated');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

        if (isVisible) {
            element.classList.add('animate__bounceIn');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Change Button Style on Scroll
window.addEventListener('scroll', () => {
    const button = document.getElementById('book-now-button');
    if (window.scrollY > 200) {
        button.classList.add('scrolled');
    } else {
        button.classList.remove('scrolled');
    }
});
