const butterfly = document.querySelector('.butterfly');
const astronout = document.querySelector('.astronout');
const heroWrapper = document.querySelector('.heroWrapper');

heroWrapper.addEventListener('mousemove', function(e) {
    let x = e.clientX / 100;
    let y = e.clientY / 100;
    butterfly.style.transform = `translate(${x}%, ${y}%)`;
    astronout.style.transform = `translate(${x}%, ${y}%)`;
})









AOS.init({
    duration: 1000,
    delay: 200,
});