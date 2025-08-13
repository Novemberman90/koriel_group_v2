window.addEventListener('DOMContentLoaded', ()=>{
  const MENUBTN = document.querySelector('.menu__btn');
  const MENUWRAP = document.querySelector('.menu__wrap');
  // const goTop = document.querySelector('.go-top');

  MENUBTN.addEventListener('click', ()=> {
    MENUBTN.classList.toggle('menu__btn--active');
    openMenu();
  });

  const openMenu=()=>{
    document.body.classList.toggle('lock');
    MENUWRAP.classList.toggle('menu__wrap--active')
  }


  // tabs

  const tabBtn = document.querySelectorAll('.tab-nav__btn'),
  tabItem = document.querySelectorAll('.tab__item'),
  tabNav = document.querySelector('.tab-nav');
  
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
        item.classList.remove('tab__item--active');
      });

      document.getElementById(tabId).classList.add('tab__item--active')
    })
  });

})