'use strict';

class CarouselSection extends HTMLElement {
  constructor() {
    super();
    this.swiperInstance = null;
    this.toggleSwiper = this.toggleSwiper.bind(this);
    this.initSwiper();
  }

  render() {
    this.innerHTML = `
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../src/face1.png" alt="Slide 1" /></div>
            <div class="swiper-slide"><img src="../src/face2.png" alt="Slide 2" /></div>
            <div class="swiper-slide"><img src="../src/face3.png" alt="Slide 3" /></div>
            <div class="swiper-slide"><img src="../src/face1.png" alt="Slide 4" /></div>
            <div class="swiper-slide"><img src="../src/face2.png" alt="Slide 5" /></div>
            <div class="swiper-slide"><img src="../src/face3.png" alt="Slide 6" /></div>
          
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      `;
  }

  toggleSwiper() {
    if (this.swiperInstance) {
      this.destroySwiper();
      this.innerHTML = ``;
    } else {
      this.initSwiper();
    }
  }

  initSwiper() {
    this.render();
    const swiperContainer = this.querySelector('.swiper-container');

    const toggleButton = document.querySelector('#toggleSwiper');
    toggleButton.addEventListener('click', this.toggleSwiper);

    if (!swiperContainer) {
      console.error('Swiper container not found');
      return;
    }

    if (!this.swiperInstance) {
      this.swiperInstance = new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 8,
        loop: true,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          376: {
            slidesPerView: 2,
          },
          769: {
            slidesPerView: 3,
          },
        },
        on: {
          realIndexChange: () => {
            if (this.swiperInstance) {
              const realIndex = this.swiperInstance.realIndex;
              console.log('Current slide:', realIndex + 1);
            }
          },
        },
      });
    }
  }

  destroySwiper() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }
  }
}

customElements.define('carousel-section', CarouselSection);
