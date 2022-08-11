const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenuBtn = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

navEmail.addEventListener('click', toggleDesktopMenu)
mobileMenuBtn.addEventListener('click', toggleMobilepMenu)

function toggleDesktopMenu() {
   desktopMenu.classList.toggle('inactive')
}

function toggleMobilepMenu() {
   mobileMenu.classList.toggle('inactive')
}