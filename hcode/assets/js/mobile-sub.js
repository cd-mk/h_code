$(document).ready(function() {
  var prdSlide = new Swiper('.prd_slide', {
    initialSlide: 1,
    effect: 'cube',
    grabCursor: true,
    autoHeight: true,
    cubeEffect: {
      shadow: false,
      slideShadows: false,
    },
    on: {
      init: function() {
        if (prdSlide !== undefined) {
          showText();
        }
      },
      slideChange: function() {
        var curSlide = this.activeIndex;
        var target = this.$el;
        var video = $(target).find('video');
        var subSlide = $(target).find('.sub_slide');
        var icoArr = $(target).find('.ico_arr');
    
        if (prdSlide !== undefined) {
          showText();
        }

        if (curSlide === 2) {
          video.get(0).load();
          video.get(0).play();
          
        } else {
          icoArr.removeClass('hide');
          subSlide.removeClass('moved');
          video.get(0).load();
          video.get(0).play();
        }
      }
    }
  });

  function showText() {
    var firstSlideIdx = prdSlide[0].activeIndex; 
    var secondSlideIdx = prdSlide[1].activeIndex; 

    return firstSlideIdx === 1 && secondSlideIdx === 1 ? $('.txt_scroll').show() : $('.txt_scroll').hide();
  }

  var subSlide = new Swiper('.sub_slide', {
    slidesPerView: 1.1,
    spaceBetween: 32,
    slidesOffsetBefore: -28,
    slidesOffsetAfter: 28,
    nested: true
  });

  $('.sub_slide').on('tapmove', function(e) {
    $(this).next('.ico_arr').addClass('hide');
    $(this).addClass('moved');
  });

  $('.btn_plus').on('click', function() {
    var idx = $(this).index();
    $(this).toggleClass('on');
    $(this).closest('.tool_btns').next('.tool_layers').find('.img_txt').eq(idx).toggleClass('on');
  });

  $('.ico_arr').on('mouseover', function() {
    $(this).addClass('hide');
    $(this).prev('.sub_slide').addClass('moved');
  });


  // $('#js-touch1').on('swipeup', function(e) {
  //   var secondScreenTop = $('#js-touch2').offset().top;

  //   $('html, body').stop().animate({
  //     scrollTop: secondScreenTop + 'px'
  //   });
  // });
  // $('#js-touch2').on('swipedown', function(e) {

  //   $('html, body').stop().animate({
  //     scrollTop: 0
  //   });
  // });
});