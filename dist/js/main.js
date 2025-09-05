window.addEventListener('DOMContentLoaded', ()=>{
  const MENUBTN = document.querySelector('.menu__btn');
  const MENUWRAP = document.querySelector('.menu__wrap');
  const goTop = document.querySelector('.go-top');

  MENUBTN.addEventListener('click', ()=> {
    if(MENUBTN) {
      openMenu();
      document.body.classList.toggle('lock');
    }
  });

  const openMenu=()=>{
    MENUWRAP.classList.toggle('menu__wrap--active');
    MENUBTN.classList.toggle('menu__btn--active');
  }
  const closeMenu =()=>{
    document.body.classList.remove('lock');
    MENUWRAP.classList.remove('menu__wrap--active');
    MENUBTN.classList.remove('menu__btn--active');
  }

/* Скрол меню и кнопки вверх */
  const navLink = document.querySelectorAll('a[href^="#"], [data-scroll]');
  navLink.forEach(link => {
    link.addEventListener('click', (e)=>{
      e.preventDefault();
       const targetId = link.dataset.scroll || link.getAttribute('href').substring(1);
       
       if(!link.classList.contains('go-top')) {
        scrollNavigation(targetId)
        closeMenu();
       } else {
        window.scrollTo({
          top: 0,
          behavior:'smooth',
          })
       }
    })
  });

  const scrollNavigation = (targetId)=> {
    const targetElement = document.getElementById(targetId);
  
    if(!targetElement) return;

    const headerHeght = document.querySelector('#header').offsetHeight;
    const top = targetElement.getBoundingClientRect().top + window.scrollY - headerHeght;

      window.scrollTo({
        top: top,
        behavior:'smooth',
      })
  }


/* При скроле меняется хедер и активация кнопки НА ВЕРХ */
let isScrolled = false;
const headerScroll = () => {
  const header = document.querySelector('.header');
  const headerHeght = header.offsetHeight;
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const contactWiget = document.querySelector('.contact-wiget');

  if(scrollPosition > headerHeght + 100) {
    goTop.classList.add('go-top--active'); 
    contactWiget.classList.add('contact-wiget--active'); 
  } else {
    goTop.classList.remove('go-top--active'); 
    contactWiget.classList.remove('contact-wiget--active'); 
  }

  
  const headerInner = document.querySelector('.header__inner'),
        headerContactList = document.querySelector('.header__contact-list'),
        headerContent = document.querySelector('.header__content'),
        menuWrap = document.querySelector('.menu__wrap')

    if (scrollPosition >= headerHeght + 100  && !isScrolled) {
    isScrolled = true;
    headerContactList.classList.add('header__contact-list--scrolled');
    menuWrap.classList.add('menu__wrap--scrolled');
    headerContent.classList.add('header__content--transform');
    
    setTimeout(() => {
      headerInner.classList.add('header__inner--transform');
      headerContactList.classList.add('header__contact-list--transform');
      headerContactList.classList.remove('header__contact-list--scrolled');
      menuWrap.classList.remove('menu__wrap--scrolled');
      menuWrap.classList.add('menu__wrap--transform');
    }, 100);
      
  } else if (scrollPosition  <= headerHeght + 20  && isScrolled) {
     isScrolled = false;
    headerContactList.classList.add('header__contact-list--scrolled');
    menuWrap.classList.add('menu__wrap--scrolled');
    setTimeout(() => {

    headerContactList.classList.remove('header__contact-list--scrolled');
    headerContactList.classList.remove('header__contact-list--transform');

    menuWrap.classList.remove('menu__wrap--scrolled');
    menuWrap.classList.remove('menu__wrap--transform');

    headerContent.classList.remove('header__content--transform');
    headerInner.classList.remove('header__inner--transform');
    }, 50);
  }
  
}
window.addEventListener('scroll', headerScroll);


  // tabs

  const tabBtn = document.querySelectorAll('.tab-nav__btn'),
        tabItem = document.querySelectorAll('.tab__item');
  
  tabBtn.forEach(button => {
    button.addEventListener('click', (e)=>{
      const tabId = button.getAttribute('data-btn');
      e.preventDefault();
      
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

      document.getElementById(tabId).classList.add('tab__item--active', 'fade');
    })

  });

/* clients-slider */

var swiper = new Swiper(".clients-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
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
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
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

  // Создаем IntersectionObserver, который будет следить за элементами на странице
const observer = new IntersectionObserver((entries)=> {
  entries.forEach(entry => {

     // Проверяем, пересек ли элемент 50% своей высоты в зоне видимости
    if(entry.isIntersecting){
      // Получаем id элемента, который сейчас виден
       const activeId = entry.target.id;
       
       // Удаляем класс активности у всех элементов списка навигации
       document.querySelectorAll('.menu__link').forEach(item => {
        item.classList.remove('menu__link--active')
       });

       // Находим ссылку, которая ведет к активному элементу
       const adctivLink = document.querySelector(`.menu__link[href="#${activeId}"]`);

       // Если такая ссылка существует, добавляем активный класс ее родителю (элементу списка)
       if(adctivLink) {
        adctivLink.closest('.menu__link').classList.add('menu__link--active');
       }
    }
  });
}, {threshold: 0.25} ); // Observer срабатывает, когда 50% элемента в зоне видимости

// Находим все элементы, за которыми будем следить, и подключаем их к Observer'у
document.querySelectorAll('#hero, #about, #offer, #projects, #contact, #contact, #news, #question' ).forEach(element => {
  observer.observe(element)
});

  /* Анимация */
  new WOW().init();


})