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

$(function () {
    $(".heart").on("click", function () {
        $(this).toggleClass("is-active");
    });
});

var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');

modalBtn.addEventListener('click', openModal);
window.addEventListener('click', clickOutside)


// $(function () {
//     $(".modalBtn").on("click", function () {
//         $("#simpleModal").toggleClass("is-active");
//     });
// });

function openModal() {
    modal.style.display = 'block';
    // console.log("jkaljd");
}


function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}



