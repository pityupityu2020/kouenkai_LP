document.addEventListener('DOMContentLoaded', ()=>{
    const hero = new HeroSlider('.swiper-container');
});

class HeroSlider{
    constructor(el){
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper(){
        return new Swiper(this.el, {
            // Optional parameters
            loop: true,
            effect:'coverflow',
            centeredSlides: true,
            slidesPerView: 1,
            speed: 1000,
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                }
            },
            autoplay: {
                delay: 4000,
                disabledInteraction: false,
            },
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // // And if we need scrollbar
            // scrollbar: {
            //   el: '.swiper-scrollbar',
            // },
          })
    }
}

