const menuIcon=document.querySelector('#menu-icon');
const navbar=document.querySelector('.nav-links');
menuIcon.onclick=() => {
    navLinks.class-List.toggle('active');
}
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
