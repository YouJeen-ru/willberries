const swiper = new Swiper('.swiper-container', {
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// cart

const buttonCart = document.querySelector('.button-cart')
const modalCart = document.querySelector('#modal-cart')


const openModal = function () {
    modalCart.classList.add('show')
}

const closeModal = function () {
    modalCart.classList.remove('show')
}

buttonCart.addEventListener('click', openModal)


modalCart.addEventListener('click', function (event) {
    const target = event.target
    if(target.classList.contains('overlay') || (target.classList.contains('modal-close'))) {
        closeModal()
    }
})


// universal fn smooth scrolling

 {
    const scrollLinks = document.querySelectorAll('a.scroll-link')

    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function (event) {
            event.preventDefault()
            const id = scrollLink.getAttribute('href')
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

// goods

const more = document.querySelector('.more')
const navigationItem = document.querySelectorAll('.navigation-item')
const longGoodsList = document.querySelector('.long-goods-list')

const getGoods = async function () {
    const result = await fetch('db/db.json')
    if (!result.ok) {
        throw 'Error' + result.status
    }
    return result.json()
}

getGoods().then(function (data) {
    console.log(data)
})

const createCard = function (objCard) {
    const card = document.createElement('div')
    card.className = 'col-lg-3 col-sm-6'
    card.innerHTML = `
    
    <div class="goods-card">
    ${objCard.label ? `<span class="label">${objCard.label}</span>` : '' }
                    
                    <img src="db/${objCard.img}" alt="${objCard.name}" class="goods-image">
                    <h3 class="goods-title">${objCard.name}</h3>
                    <p class="goods-description">${objCard.description}</p>
                    <button class="button goods-card-btn add-to-cart" data-id="${objCard.id}">
                        <span class="button-price">${objCard.price}</span>
                    </button>
                </div>
    `

    return card
}


const renderCards = function (data) {
    longGoodsList.textContent = ''
    const cards = data.map(createCard)
    longGoodsList.append(...cards)
    document.body.classList.add('show-goods')
}

more.addEventListener('click', function (event) {
    event.preventDefault()
    getGoods().then(renderCards)
})
