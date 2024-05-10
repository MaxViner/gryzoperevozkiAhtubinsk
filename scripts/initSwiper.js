

var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const link = document.getElementById('switch-to-fifth-slide');
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        swiper.slideTo(4); 
    });
 