let days = document.querySelector('#days');
let hours = document.querySelector('#hours'); 
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');

let newRelease = new Date('June 7, 2024 00:00:00').getTime();

updateCountdown();

function updateCountdown() {
    let now = new Date().getTime();
    let downtime = newRelease - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(downtime / day);
    let h = Math.floor((downtime % day) / hour);
    let m = Math.floor((downtime % hour) / minute);
    let s = Math.floor((downtime % minute) / second);

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    setTimeout(updateCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    const animateTexts = document.querySelectorAll('.animate-text, .countdown');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in-from-bottom');
            }
        });
    }, { threshold: 0.5 });

    animateTexts.forEach(text => {
        observer.observe(text);
    });
});
const form = document.getElementById('notify-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        alert(`Thank you! You will be notified at ${email}.`);
        form.reset();
    });