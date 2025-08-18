window.addEventListener('DOMContentLoaded', ()=>{
  const MENUBTN = document.querySelector('.menu__btn');
  const MENUWRAP = document.querySelector('.menu__wrap');
  const goTop = document.querySelector('.go-top');

  MENUBTN.addEventListener('click', ()=> {
    MENUBTN.classList.toggle('menu__btn--active');
    openMenu();
  });

  const openMenu=()=>{
    document.body.classList.toggle('lock');
    MENUWRAP.classList.toggle('menu__wrap--active')
  }


/* При скроле меняется хедер и активация кнопки НА ВЕРХ */
const headerScroll = () => {
  const header = document.querySelector('.header');
  const headerHeght = header.offsetHeight;
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if(scrollPosition > headerHeght + 50) {
    goTop.classList.add('go-top--active'); 
  } else {
    goTop.classList.remove('go-top--active'); 
  }
}
window.addEventListener('scroll', headerScroll);


  // tabs

  const tabBtn = document.querySelectorAll('.tab-nav__btn'),
        tabItem = document.querySelectorAll('.tab__item');
  
  tabBtn.forEach(button => {
    button.addEventListener('click', (e)=>{
      const tabId = button.getAttribute('data-btn');
      
       // Убираем активный класс у всех кнопок
      tabBtn.forEach(btn => {
        btn.classList.remove('tab-nav__btn--active');
      });

      // Добавляем активный класс нажатой кнопке
      button.classList.add('tab-nav__btn--active');

      // Скрываем все табы
      tabItem.forEach(item => {
        item.classList.remove('tab__item--active', 'fade');
      });

      document.getElementById(tabId).classList.add('tab__item--active', 'fade')
    })
  });

/* clients-slider */

var swiper = new Swiper(".clients-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  speed: 800,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    365: {
      slidesPerView: 2,
    },
    578: {
      slidesPerView: 3,
    },
    990: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".partner-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 800,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    365: {
      slidesPerView: 2,
    },
    578: {
      slidesPerView: 3,
    },
    990: {
      slidesPerView: 4,
    },
  },
});


var swiper = new Swiper(".testmemorail__slider", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".testmemorail__next",
    prevEl: ".testmemorail__prev",
  },
});


/* Счетчик */
const startAddonNumber = (elements)=> {
  const time = 2000;  // Общее время анимации в миллисекундах
    
    elements.forEach(item => {
        let startTime;
        let num = parseInt(item.dataset.projectDone) || 0;

        const updateNumber = (timestamp) => {
            if (!startTime) startTime = timestamp;
            let progress = Math.min((timestamp - startTime) / time, 1);
            item.textContent = Math.floor(progress * num);

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        };

        requestAnimationFrame(updateNumber);
    });
}

/* Слежу когда счетчик попадёт в поле видимости, чтобы его запустить */
const addonElement = document.querySelector('.project-done');
  if (addonElement) {
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const elements = document.querySelectorAll('.project-done__num');
            startAddonNumber(elements);
            observer.disconnect(); // Отключаем после первого срабатывания
        }
    });
    
    }, { threshold: 0.25 });

    observer.observe(addonElement); // Слежу за нужным или любым другим элементом в конце страницы
  }


  /* Анимация */
  new WOW().init();

  /* Кнопка НА ВЕРХ */

goTop.addEventListener('click', (e)=>{
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})
})