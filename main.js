const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenuBtn = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shopping-cart-container')
const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click', toggleDesktopMenu)
mobileMenuBtn.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleShoppingCartContainer)

function toggleDesktopMenu() {
   const shoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')

   if (!shoppingCartContainerClosed) {
      shoppingCartContainer.classList.toggle('inactive')
   }

   desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
   const shoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')

   if (!shoppingCartContainerClosed) {
      shoppingCartContainer.classList.toggle('inactive')
   }

   mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCartContainer() {
   const mobileMenuClosed = mobileMenu.classList.contains('inactive')
   const desktopMenuClosed = desktopMenu.classList.contains('inactive')

   if (!mobileMenuClosed) {
      toggleMobileMenu()
   }

   if (!desktopMenuClosed) {
      toggleDesktopMenu()
   }

   shoppingCartContainer.classList.toggle('inactive')
}

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