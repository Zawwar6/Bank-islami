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
  const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Reset all
    tabButtons.forEach(b => {
      b.classList.remove("text-[#18407C]", "active");
      b.classList.add("text-gray-400");
      b.querySelector(".icon").classList.remove("text-[#8CC53F]");
      b.querySelector(".icon").classList.add("text-gray-400");
      b.querySelector(".underline").classList.add("hidden");
    });

    // Activate current
    btn.classList.add("text-[#18407C]", "active");
    btn.classList.remove("text-gray-400");
    btn.querySelector(".icon").classList.add("text-[#8CC53F]");
    btn.querySelector(".icon").classList.remove("text-gray-400");
    btn.querySelector(".underline").classList.remove("hidden");

    // Show related tab content
    const tab = btn.getAttribute("data-tab");
    tabContents.forEach(content => {
      content.classList.add("hidden");
    });
    document.getElementById(tab).classList.remove("hidden");
  });
});

const appSwiper = new Swiper(".myAppSwiper", {
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

