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

    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function (event) {
            event.preventDefault()
            const id = scrollLinks[i].getAttribute('href')
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}