const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    burger.addEventListener('click', () => {
        // Toggle Nav

        nav.classList.toggle('nav-active');
        // Animate Links

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
        // Burger Animate
        burger.classList.toggle('toggle');
    });

}

navSlide();

const btnContainer = document.querySelector('.btn-container');
const btn = btnContainer.querySelector('.btn');

btnContainer.onclick = function() {
  btn.classList.toggle('checked');
}
