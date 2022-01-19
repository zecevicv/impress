/* #Product Slider
  ======================================================= */
if (document.querySelector('.product-slider .swiper')) {
  const sliders = document.querySelectorAll('.product-slider .slider');

  sliders.forEach((slider) => {
    const swiper = slider.querySelector('.swiper');
    const scrollbar = slider.querySelector('.swiper-scrollbar');
    const next = slider.querySelector('.next');
    const prev = slider.querySelector('.prev');

    new Swiper(swiper, {
      breakpoints: {
        0: {
          slidesPerView: 1.27
        },
        1024: {
          slidesPerView: 4
        }
      },
      scrollbar: {
        el: scrollbar,
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  });
}

/* #Product Slider
  ======================================================= */
if (document.querySelector('.counter')) {
  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    const hours = counter.querySelector("#hours");
    const minutes = counter.querySelector("#minutes");
    const seconds = counter.querySelector("#seconds");
    const startBtn = counter.querySelector("#startBtn");
    let mySecond = 45;
    let myMinute = 30;
    let myHour = 15;
    var timer = null;
  
    function startTimer() {
      mySecond <= 10 ?
        (seconds.innerHTML = "0" + mySecond) :
        (seconds.innerHTML = mySecond);
      myMinute <= 10 ?
        (minutes.innerHTML = "0" + myMinute) :
        (minutes.innerHTML = myMinute);
      myHour <= 10 ? (hours.innerHTML = "0" + myHour) : (hours.innerHTML = myHour);
      timer = setInterval(() => {
        if (mySecond == 0) {
          mySecond = 60;
          if (myMinute != 0) {
            myMinute <= 10 ?
              (minutes.innerHTML = "0" + --myMinute) :
              (minutes.innerHTML = --myMinute);
          } else if (myHour != 0) {
            myHour <= 10 ?
              (hours.innerHTML = "0" + --myHour) :
              (hours.innerHTML = --myHour);
            myMinute = 60;
            minutes.innerHTML = --myMinute;
          } else {
            alert("Time's up!");
            clearInterval(timer);
            startBtn.removeAttribute("disabled");
          }
        }
        mySecond <= 10 ?
          (seconds.innerHTML = "0" + --mySecond) :
          (seconds.innerHTML = --mySecond);
      }, 1000);
    }
    
    startTimer();
  });

}