const text = document.querySelector('.main-middle_center__text');

window.addEventListener('mousemove', (e)=>{
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    text.style.transform = 'translateY(' + y * 20 + 'px) translateX('+ x * 50 + 'px)';
    text.style.transition = 'transform ease';
});