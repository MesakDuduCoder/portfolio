const btn = document.querySelector('#header-btn2');
const btn2 = document.querySelector('#close-menu');

function display() {
  document.getElementById('header-top').style.filter = 'blur(8px)';
  document.getElementById('menu').style.visibility = 'visible';
  document.getElementById('menu-items').style.visibility = 'visible';
  document.body.style.overflow = 'hidden';
}

function closeDisplay() {
  document.getElementById('header-top').style.filter = 'blur(0)';
  document.getElementById('menu').style.visibility = 'hidden';
  document.getElementById('menu-items').style.visibility = 'hidden';
  document.body.style.overflow = 'scroll';
}

btn.addEventListener('click', display);
btn2.addEventListener('click', closeDisplay);
