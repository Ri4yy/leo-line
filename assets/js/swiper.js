document.addEventListener('DOMContentLoaded', () => {
    let swiperThumbs = new Swiper(".swiper-thumbs", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
    });
    let swiperMain = new Swiper(".swiper-main", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-main__next",
            prevEl: ".swiper-main__prev",
        },
        pagination: {
            el: '.swiper-main__pagination',
        },
        thumbs: {
            swiper: swiperThumbs,
        },
    });

    let swiperSimilar = new Swiper('.swiper-similar', {
    spaceBetween: 40,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1 
        },
        375: {
            allowTouchMove: true,
            slidesPerView: 2,
            spaceBetween: 7
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 2.1,
            spaceBetween: 10
        },
        768: {
            allowTouchMove: true,
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 3
        },
        1280: {
            allowTouchMove: true,
            slidesPerView: 4
        },
        1921: {
            allowTouchMove: true,
            slidesPerView: 5
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-similar__pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-similar__next',
        prevEl: '.swiper-similar__prev',
    },
});
})