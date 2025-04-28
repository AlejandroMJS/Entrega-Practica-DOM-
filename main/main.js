const products = [
    {
      name: 'HP Essentials 255 G8 AMD',
      price: 289,
      stars: 4,
      reviews: 250,
      seller: 'PcComponentes',
      image: 'https://img.pccomponentes.com/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
    },
    {
      name: 'Lenovo IdeaPad 3',
      price: 399,
      stars: 4.5,
      reviews: 325,
      seller: 'MediaMarkt',
      image: 'https://img.pccomponentes.com/articles/1081/10818645/1411-lenovo-ideapad-3-15alc6-amd-ryzen-7-5700u-8gb-256gb-ssd-156-teclado-italiano.jpg'
    },
    {
      name: 'ASUS VivoBook 15',
      price: 349,
      stars: 4.2,
      reviews: 189,
      seller: 'Amazon',
      image: 'https://img.pccomponentes.com/articles/1085/10853125/1116-asus-vivobook-15-f1504va-nj1382w-intel-core-i7-1355u-16gb-1tb-ssd-156.jpg'
    },
    {
      name: 'MacBook Air M1',
      price: 899,
      stars: 5,
      reviews: 720,
      seller: 'Apple Store',
      image: 'https://img.pccomponentes.com/articles/1080/10803257/1298-apple-macbook-air-13in-m1-8-core-cpu-7-core-gpu-8go-256gb-space-grey-fr.jpg'
    },
    {
      name: 'Dell Inspiron 15',
      price: 459,
      stars: 3.9,
      reviews: 245,
      seller: 'Dell',
      image: 'https://img.pccomponentes.com/articles/1086/10861011/1729-dell-inspiron-3530-intel-core-i5-1334u-8gb-512gb-ssd-156-foto.jpg'
    },
    {
      name: 'Acer Aspire 3',
      price: 329,
      stars: 3.7,
      reviews: 178,
      seller: 'Fnac',
      image: 'https://img.pccomponentes.com/articles/1082/10825988/1427-acer-aspire-3-a315-59-intel-core-i5-1235u-16gb-1tb-ssd-156-review.jpg'
    },
    {
      name: 'MSI Modern 14',
      price: 549,
      stars: 4.3,
      reviews: 203,
      seller: 'PcComponentes',
      image: 'https://img.pccomponentes.com/articles/1085/10858078/1446-msi-modern-14-f13mg-203xes-intel-core-i7-1355u-16gb-1tb-ssd-14.jpg'
    },
    {
      name: 'Huawei MateBook D15',
      price: 499,
      stars: 4.1,
      reviews: 287,
      seller: 'Huawei Store',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92958920?x=1800&y=1800&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=1800&ey=1800&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=1800&cdy=1800'
    },
    {
      name: 'Samsung Galaxy Book',
      price: 629,
      stars: 4.4,
      reviews: 156,
      seller: 'Samsung',
      image: 'https://img.pccomponentes.com/articles/1085/10853377/1717-samsung-galaxy-book4-15-np750xgj-kg2es-intel-core-i5-1335u-16gb-512gb-ssd-156.jpg'
    },
    {
      name: 'Gigabyte G5',
      price: 799,
      stars: 4.7,
      reviews: 312,
      seller: 'LDLC',
      image: 'https://img.pccomponentes.com/articles/1080/10802464/1300-gigabyte-g5-mf5-52es354sd-intel-core-i5-13500h-16gb-1tb-ssd-rtx-4050-156.jpg'
    }
  ];


  //NAVBAR
  const header = document.createElement("header")
  document.body.appendChild(header)

  const logoJs = document.createElement("img")
  logoJs.src = "./assets/JavaScript-logo.png"
  logoJs.className = "logoJs"
  header.appendChild(logoJs)

  const headerUl = document.createElement("ul")
  headerUl.className = "headerUl"
  header.appendChild(headerUl)

  const navTitles = ["Todas las categorías","Catálogo", "Mi cuenta" ]

  navTitles.forEach(title => {
    const navBarLi = document.createElement("li")
    navBarLi.className = "navBarLi"
    navBarLi.textContent = title
    headerUl.appendChild(navBarLi)
  
    if (title === "Catálogo") {
      const desplegable = document.createElement("ul")
      desplegable.className = "desplegable"
  
      const subcategorias = ["Ordenadores", "Monitores", "Smartphones"]
      subcategorias.forEach(subcategoria => {
        const desplegableLi = document.createElement("li")
        const desplegableEnlace = document.createElement("a")
        desplegableEnlace.href = "#"
        desplegableEnlace.textContent = subcategoria
        desplegable.appendChild(desplegableLi)
        desplegableLi.appendChild(desplegableEnlace)
      })
  
      navBarLi.appendChild(desplegable)  
      desplegable.style.display = "none"
  
      navBarLi.addEventListener("mouseenter", function() {
        desplegable.style.display = "block"
      })
  
      navBarLi.addEventListener("mouseleave", function() {
        desplegable.style.display = "none"
      })
    }
  })



  const firstSection = document.createElement("section")
  document.body.appendChild(firstSection)
  firstSection.className = "firstSection"

  const searchContainer = document.createElement("section")
  document.body.insertBefore(searchContainer, firstSection)
  searchContainer.className = "searchContainer"

  const searchInput = document.createElement("input")
  searchInput.type = "search"
  searchInput.placeholder = "Buscar productos..."
  searchInput.className = "searchInput"
  searchContainer.appendChild(searchInput)

  const landingPage = document.createElement("h1")
  searchContainer.appendChild(landingPage)
  landingPage.textContent = "Computer Zone"
  landingPage.className = "landingPage"
  

  const smartPhone = document.querySelector(".smartphone");
  const productContainer = document.createElement("div");
  productContainer.className = "productContainer";
  firstSection.appendChild(productContainer);
  firstSection.insertBefore(smartPhone, productContainer);
  
  const aside = document.querySelector(".marcas-modelos")
  firstSection.insertBefore(aside,smartPhone)

  //Bucle productos
  products.forEach(product => {
  const productContainer = document.createElement("div")
  productContainer.className = "product-item"

  const imagesDiv = document.createElement("div")
  imagesDiv.className = "imagesDiv"

  const images = document.createElement("img")
  images.src = product.image
  images.className = "images"
  imagesDiv.appendChild(images)
  productContainer.appendChild(imagesDiv)

  const productTitle = document.createElement("h2")
  productTitle.textContent = product.name
  productTitle.className = "productTitle"
  productContainer.appendChild(productTitle)

  const priceSpan = document.createElement("span")
  priceSpan.textContent = `${product.price} €`
  priceSpan.className = "price"
  productContainer.appendChild(priceSpan)

  const peopleReviews = document.createElement("span")
  peopleReviews.textContent = `${product.reviews} valoraciones`
  peopleReviews.className = "reviews"
  productContainer.appendChild(peopleReviews)

  const tienda = document.createElement("span")
  tienda.textContent = product.seller
  tienda.className = "seller"
  productContainer.appendChild(tienda)

  firstSection.appendChild(productContainer)


  const comprarButton = document.createElement("button")
  comprarButton.className = "comprarButton"
  comprarButton.textContent = "Añadir al carro"
  productContainer.appendChild(comprarButton)

  //Rating estrellas
  const starsContainer = document.createElement("div")
  starsContainer.className = "stars-container"

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span")
    star.className = "star"
    if (i <= product.stars) {
      star.textContent = "★"
    } else {
      star.textContent = "☆"
    }
    starsContainer.appendChild(star)
  }
  productContainer.appendChild(starsContainer)


  comprarButton.addEventListener("click", function(){
    carroElementos = product
    carroCount++

    console.log(carroElementos)
    console.log(carroCount)

    cartNumber.textContent = carroCount

    comprarButton.textContent = "¡Añadido!"

   

    shoppingCart.addEventListener("click", function() {
        alert(`Elementos en la cesta: ${carroCount}`) 
        shoppingCart.removeEventListener("click", mostrarMensajeCarrito)
    })
    
  })

})

//Carrito de compra y sus elementos
  let carroCount = 0
  let carroElementos = []


  const cartContainer = document.createElement("div")
  header.appendChild(cartContainer)
  cartContainer.className = "cartContainer"


  const shoppingCart = document.createElement("img")
  shoppingCart.src = "./assets/shopping-cart.svg"
  cartContainer.appendChild(shoppingCart)


  const cartNumber = document.createElement("span")
  cartContainer.appendChild(cartNumber)
  cartNumber.className = "cartNumber"
  cartNumber.textContent = 0
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const footer = document.createElement('footer')
    const footerContent = document.createElement('div')
    footerContent.className = 'footer-content'
  
    const socialIcons = document.createElement('div')
    socialIcons.className = 'social-icons'
  
    const socialLinks = [
      { href: '#', src: './assets/linkedIn.svg', alt: 'LinkedIn' },
      { href: '#', src: './assets/twitter.svg', alt: 'Twitter' },
      { href: '#', src: './assets/facebook.svg', alt: 'Facebook' },
      { href: '#', src: './assets/instagram.svg', alt: 'Instagram' },
      { href: '#', src: './assets/youtube.svg', alt: 'YouTube' },
      { href: '#', src: './assets/discord.svg', alt: 'Discord' },
      { href: '#', src: './assets/github.svg', alt: 'GitHub' },
      { href: '#', src: './assets/tiktok.svg', alt: 'TikTok' },
      { href: '#', src: './assets/whatsapp.svg', alt: 'WhatsApp' },
      { href: '#', src: './assets/reddit.svg', alt: 'Reddit' },
      { href: '#', src: './assets/snapchat.svg', alt: 'Snapchat' }
    ];
  
    socialLinks.forEach(link => {
      const a = document.createElement('a')
      a.href = link.href
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
  
      const img = document.createElement('img')
      img.src = link.src
      img.alt = link.alt
  
      a.appendChild(img)
      socialIcons.appendChild(a)
    });
  
    const copyrightDiv = document.createElement('div')
    copyrightDiv.className = 'copyright'
    copyrightDiv.innerHTML = '&copy; 2025 AlejandroMJS'
  
    footerContent.appendChild(socialIcons)
    footerContent.appendChild(copyrightDiv)
    footer.appendChild(footerContent)
  
    document.body.appendChild(footer)
  })
  

  const spanHora = document.querySelector('.time')

  const ahora = new Date()
  const horas = ahora.getHours().toString().padStart(2, '0')
  const minutos = ahora.getMinutes().toString().padStart(2, '0')
  
  spanHora.textContent = `${horas}:${minutos}`
  