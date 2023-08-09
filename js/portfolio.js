/*  ========== Toggle icon navbar  ========== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*  ========== Scroll Section active link  ========== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*  ========== Sticky navbar  ========== */
    let header = document.querySelectorAll('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    /*  ========== Remove toggle icon and navbar when click navbar link (scroll)  ========== */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*  ========== Scroll reveal  ========== */
ScrollReveal({ 
    // reset: true ,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content h1, .home-content h3, .home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(' .home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('  .home-content, .about-content', { origin: 'right' });