var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 1500,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    spaceBetween: -550,
});

$(document).ready(function () {
    $(".btn-menu").click(function () {
        $(".modal").show();
    });
    $(".btn-close").click(function () {
        $(".modal").hide();
    });
});