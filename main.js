const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenuBtn = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shopingCart = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

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

// En esta sección tenemos los productos borrados de nuestro html
/* <div class="product-card">
<img
   src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
   alt="">
<div class="product-info">
   <div>
      <p>$120,00</p>
      <p>Bike</p>
   </div>
   <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
   </figure>
</div>
</div> */

function renderProducts(productList) {
   for (product of productList) {
      const productCard = document.createElement('div')
      productCard.classList.add('product-card')

      const productImg = document.createElement('img')
      productImg.setAttribute('src', product.image) // forma 1

      const productInfo = document.createElement('div')
      productInfo.classList.add('product-info')

      const productInfoDiv = document.createElement('div')

      const productPrice = document.createElement('p')
      productPrice.innerText = `$${product.price}`

      const productName = document.createElement('p')
      productName.innerText = `${product.name}`

      const productInfoFigure = document.createElement('figure')

      const cartImg = document.createElement('img')
      cartImg.src = './icons/bt_add_to_cart.svg' // forma 2

      productInfoFigure.appendChild(cartImg)
      productInfoDiv.append(productPrice, productName)
      productInfo.append(productInfoDiv, productInfoFigure)
      productCard.append(productImg, productInfo)
      cardsContainer.appendChild(productCard)
   }
}

function main() {
   let productList = []

   productList = [
      ...productList,
      { name: 'Bike', price: 120, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
      { name: 'Bike', price: 120, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
      { name: 'Bike', price: 120, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }
   ]

   renderProducts(productList)
}

main()