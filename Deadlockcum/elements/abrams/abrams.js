let img = document.querySelector('.animation__img'),
    animationBlock = document.querySelector('.animation');
animationBlock.addEventListener('mousemove', (e) => {
  if (e.target.classList.contains('animation__img')) {
    let topCurs = Math.round(e.offsetY - animationBlock.offsetHeight / 2) / 5;
    let leftCurs = Math.round(e.offsetX - animationBlock.offsetWidth / 2) / 5;
    img.style.transform = `rotateX(${topCurs}deg) rotateY(${-leftCurs}deg)`;
  }
});

document.getElementById('bebop.webp.png').addEventListener('click', function() {
  window.location.href = 'file:///C:/Users/Pekarnya/Desktop/Deadlockcum/21/abrams/abrams.html'; 
});

