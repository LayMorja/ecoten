// Подключение функционала "Чертогов Фрилансера"
import { bodyLock, bodyLockToggle, bodyUnlock, isMobile, removeClasses } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

if (document.querySelector('.header__lang')) {
  const button = document.querySelector('.lang__btn');
  const langBody = document.querySelector('.lang');
  const activeItem = document.querySelector('.lang__active');

  const closeList = () => {
    langBody.classList.contains('lang--open') ? langBody.classList.remove('lang--open') : null;
  };

  document.addEventListener('click', function (e) {
    const target = e.target;

    if (target.closest('.lang__btn')) {
      langBody.classList.toggle('lang--open');
    }

    if (!target.closest('.lang')) {
      closeList();
    }

    if (target.closest('.lang__el')) {
      const clickedItem = target.closest('.lang__el');
      activeItem.innerHTML = clickedItem.innerHTML;
      closeList();
    }
  });
}

document.addEventListener('click', function (e) {
  const target = e.target;
  const allButtons = document.querySelectorAll('.catalog__view');

  if (target.closest('.catalog__view')) {
    const currentBtn = target.closest('.catalog__view');
    const rowView = currentBtn.dataset.position;
    const catalogList = document.querySelector('.catalog__products');

    removeClasses(allButtons, 'catalog__view--active');
    currentBtn.classList.add('catalog__view--active');

    rowView === 'single'
      ? catalogList.classList.add('catalog__products--single')
      : catalogList.classList.remove('catalog__products--single');
  }

  if (target.closest('[data-return]')) {
    document.documentElement.classList.toggle('catalog-open');
    bodyLockToggle();
  }
});

// document.addEventListener('click', function (e) {
//   const target = e.target;

//   if (target.closest('.catalog__link')) {
//     const currentLink = target.closest('.catalog__link');
//     const allLinks = Array.from(target.closest('.spollers__body').querySelectorAll('a'));
//     const spollerID = target.closest('[data-spoller-id]').dataset.spollerId;
//     let linkID;

//     for (let i = 0; i < allLinks.length; i++) {
//       if (allLinks[i] === currentLink) linkID = i;
//     }

//     localStorage.setItem('spollerID', spollerID);
//     localStorage.setItem('linkID', linkID);
//   }
// });

// document.addEventListener('DOMContentLoaded', function (e) {
//   if (localStorage.getItem('spollerID') && localStorage.getItem('linkID')) {
//     const spollerID = localStorage.getItem('spollerID');
//     document
//       .querySelector(`[data-spoller-id="${spollerID}"]`)
//       .querySelector('.spollers__title')
//       .classList.add('_spoller-active');
//   }
// });
