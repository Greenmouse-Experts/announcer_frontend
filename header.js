



const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");
const body = document.querySelector("body");

const mobileMenu = () => {
   menu.classList.toggle("is-active");
   menuLinks.classList.toggle("active");
   body.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown_menu');
const arrow = document.querySelector('.arrow');

dropdown.addEventListener('click', (e) => {
   e.preventDefault();
   dropdownMenu.classList.toggle('active');
   arrow.classList.toggle('rotate');
});


document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
     dropdownMenu.classList.remove('active');
     arrow.classList.remove('rotate');
  }
});


