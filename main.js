const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenuBtn = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shopingCart = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleDesktopMenu)
mobileMenuBtn.addEventListener('click', toggleMobileMenu)
shopingCart.addEventListener('click', toggleAside)

function toggleDesktopMenu() {
   const asideClosed = aside.classList.contains('inactive')

   if (!asideClosed) {
      aside.classList.toggle('inactive')
   }

   desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
   const asideClosed = aside.classList.contains('inactive')

   if (!asideClosed) {
      aside.classList.toggle('inactive')
   }

   mobileMenu.classList.toggle('inactive')
}

function toggleAside() {
   const mobileMenuClosed = mobileMenu.classList.contains('inactive')
   const desktopMenuClosed = desktopMenu.classList.contains('inactive')

   if (!mobileMenuClosed) {
      toggleMobileMenu()
   }

   if (!desktopMenuClosed) {
      toggleDesktopMenu()
   }

   aside.classList.toggle('inactive')
}