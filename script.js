// -----------toggle icon navbar--------------
let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ------------Scroll section active link-----------
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll = function () { 
    scrollFunction();
    togglefunction();
};

function scrollFunction() {
    // Calculate the scroll progress
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let progress = (scrollTop / (scrollHeight - clientHeight)) * 100;

    // Update the width of the progress bar
    document.getElementById("scroll-bar").style.display = "block";
    document.getElementById("scroll").style.width = progress + "%";
}
function togglefunction() {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // -----------Remove toggle icon navbar--------------
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// ----------- Scroll Reval --------------
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    dealy: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ----------- Typed js --------------
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Python Developer', 'ML Engineer', 'Data Analytics'],
    typeSpeed: 100,
    backSpeed: 100,
    backDealy: 1000,
    loop: true
});

// Display Currenttime
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('time').textContent = timeString;
}
  
setInterval(updateTime, 1000);
updateTime();
  
