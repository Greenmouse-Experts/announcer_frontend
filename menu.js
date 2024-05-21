document.addEventListener("DOMContentLoaded", function() {
  const burgerIcon = document.querySelector('.icon_burger');
  const navMenu = document.querySelector('.blueNav');

  // Toggle the mobile navigation menu
  burgerIcon.addEventListener('click', function() {
    navMenu.classList.toggle('hideMobileNav');
    navMenu.classList.toggle('showMobileNav');
  });

  // Toggle the dropdown menu for "Features"
  const featuresLink = document.querySelector('.features > a');
  featuresLink.addEventListener('click', function(event) {
    event.preventDefault();
    const dropdown = event.currentTarget.nextElementSibling;
    const arrow = event.currentTarget.querySelector('.arrow');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    arrow.classList.toggle('rotate');
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', function(event) {
    const features = document.querySelector('.features');
    if (!features.contains(event.target)) {
      const dropdown = features.querySelector('.dropdown');
      const arrow = features.querySelector('.arrow');
      if (dropdown) {
        dropdown.style.display = 'none';
      }
      if (arrow) {
        arrow.classList.remove('rotate');
      }
    }
  });
});
