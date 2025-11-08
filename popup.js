const profileButton = document.getElementById('profile-button');
const profilePopup = document.getElementById('profile-popup');
const button = document.getElementById('mobile-menu-button');
const dropdown = document.getElementById('mobile-menu-dropdown');
const iconOpen = document.getElementById('menu-icon-open');
const iconClose = document.getElementById('menu-icon-close');

profileButton.addEventListener('click', () => {
  profilePopup.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
  if (!profileButton.contains(event.target) && !profilePopup.contains(event.target)) {
    profilePopup.classList.add('hidden');
  }
});


button.addEventListener('click', () => {
        // Toggle class 'hidden' pada dropdown menu
        dropdown.classList.toggle('hidden');

        // Toggle ikon (Hamburger <-> X)
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
    });

 