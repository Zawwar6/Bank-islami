var swiper = new Swiper(".myHeroSwiper", {
  loop: true,
  effect: "fade", // fade animation
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    slideChange: function () {
      // Reset all indicators
      document.querySelectorAll('.slide-indicators rect').forEach(rect => {
        rect.setAttribute('fill', 'white');
        rect.setAttribute('fill-opacity', '0.15');
      });

      // Active slide indicators highlight
      let activeSlide = document.querySelectorAll('.swiper-slide')[this.activeIndex];
      if (activeSlide) {
        let rects = activeSlide.querySelectorAll('.slide-indicators rect');
        if (this.realIndex % 2 === 0) {
          rects[0].setAttribute('fill', '#8CC53F');
          rects[0].removeAttribute('fill-opacity');
        } else {
          rects[1].setAttribute('fill', '#8CC53F');
          rects[1].removeAttribute('fill-opacity');
        }
      }
    }
  }
});

// 👉 Indicator click pe slide change
document.querySelectorAll(".slide-indicators svg").forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    swiper.slideToLoop(index);
     // `index` ke hisaab se slide change
  });
});

var heroSwiper = new Swiper(".mySwiper", {
    slidesPerView: 5,    // ek sath kitni dikhani hain
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

