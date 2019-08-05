var mainSlide = new Swiper('.main_slide', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  watchSlidesProgress: true,
  disableOnInteraction: false,
  autoplay: {
    delay: 3000
  },
  on: {
    init: function() {
      move();
    },
    slideChange: function() {
      move();
    },
    autoplayStop: function() {
      // move(this.progress, true);
    },
    autoplayStart: function() {
      // move(this.progress);
    }
  }
});

function move(isPause) {
  var $target = $('.prg_bar');
  var width = 1;
  var animationPrg;

  function startTimer() {
    animationPrg = setInterval(frame, 3000 / 100);
  }
  function stopTimer() {
    clearInterval(animationPrg);
    isPause = true;
  }
  function frame() {
    if (!isPause) {
      if (width >= 100) {
        width = 1;
        stopTimer();
      } else {
        width++; 
        $target.width(width + '%');
      }
    }
  }

  return isPause ? stopTimer() : startTimer();
}
$('.btn_play').on('click', function() {
  mainSlide.autoplay.start();
  $(this).hide();
  $('.btn_stop').show();
  move();
});
$('.btn_stop').on('click', function() {
  mainSlide.autoplay.stop();
  $(this).hide();
  $('.btn_play').show();
  move(true);
});

var brandlide = new Swiper('.brand_slide', {
  freeMode: true,
  slidesPerView: 'auto',
  spaceBetween: 28,
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 83
  },
});

var timeSlide = new Swiper('.time_slide', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var timeSlide = new Swiper('.culture_slide', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(document).ready(function() {
  $('.js-scroll').each(function (index) {
      // 개별적으로 Wheel 이벤트 적용
      $(this).on("mousewheel DOMMouseScroll", function (e) {
          e.preventDefault();
          var delta = 0;
          if (!event) event = window.event;
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
          } 
          else if (event.detail)
              delta = -event.detail / 3;
          var moveTop = $(window).scrollTop();
          var elmSelecter = $(this).eq(index);
          // 마우스휠을 위에서 아래로
          if (delta < 0) {
              if ($(elmSelecter).next() != undefined) {
                  try{
                      moveTop = $(elmSelecter).next().offset().top;
                  }catch(e){}
              }
          // 마우스휠을 아래에서 위로
          } else {
              if ($(elmSelecter).prev() != undefined) {
                  try{
                      moveTop = $(elmSelecter).prev().offset().top;
                  }catch(e){}
              }
          }
          // 화면 이동 0.8초(800)
          $("html,body").stop().animate({
              scrollTop: moveTop + 'px'
          }, {
              duration: 800, complete: function () {
              }
          });
      });
  });
});