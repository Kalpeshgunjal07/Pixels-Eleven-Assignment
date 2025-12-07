document.querySelectorAll('.orb-img').forEach((img) => {
    img.style.animationDelay = (Math.random() * 2) + "s";
});


const tag = document.querySelector('.cursor-tag');

document.addEventListener('mousemove', (e) => {
    tag.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

