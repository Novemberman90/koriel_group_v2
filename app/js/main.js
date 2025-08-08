$(document).ready(function () {
  
  $('.rooms-tabs__carusel,.rooms-tabs__carusel--active').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: false,    
    dots: false, 
    variableWidth: true,
    swipeToSlide: true,
    lazyLoad: 'ondemand',
    infinite: true,
 /*    responsive: [
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 548,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ] */
})

  // rooms tabs control
  $(function (params) {
  $('.rooms-tabs__button').on('click', function() {
    var tabId = $(this).data('tab');

    // Переключаем активную кнопку
    $('.rooms-tabs__button').removeClass('rooms-tabs__button--active');
    $(this).addClass('rooms-tabs__button--active');

    // Переключаем панели
    $('.rooms-tabs__panel').removeClass('rooms-tabs__panel--active');
    $('#' + tabId).addClass('rooms-tabs__panel--active');

    // Переключаем карусели внутри панелей
    $('.rooms-tabs__carusel').removeClass('rooms-tabs__carusel--active');
    $('#' + tabId).find('.rooms-tabs__carusel').addClass('rooms-tabs__carusel--active');

    // Если нужно — обновляем slick позицию
    if ($('#' + tabId).find('.rooms-tabs__carusel.slick-initialized').length) {
      $('#' + tabId).find('.rooms-tabs__carusel').slick('setPosition');
    }
  });
  })

  // Menu 
  $(function (params) {
    $('.menu__btn').on('click', function() {
      $('.menu__block').toggleClass('menu__block--active');
      $('.menu__btn').toggleClass('menu__btn--active');
      $('body').toggleClass('lock');
    });
    
     $(document).on('click', function(e) {
        // Проверяем, что клик не произошел по меню или кнопке
        if (!$(e.target).closest('.menu__block, .menu__btn').length) {
          $('.menu__block').removeClass('menu__block--active');
          $('.menu__btn').removeClass('menu__btn--active');
          $('body').removeClass('lock');
        }
      });
  })


  // scroll links
$(function() {
  // Плавный скролл при клике на якоря
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    
    let target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      setTimeout(function(){
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        $('.menu__block').removeClass('menu__block--active');
        $('.menu__btn').removeClass('menu__btn--active');
        $('body').removeClass('lock');
      },100)
    }
  });
});

});
