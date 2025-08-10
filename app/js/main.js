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
})