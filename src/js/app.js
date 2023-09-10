/*  
  Для быстрого поиска скрипта в поле поиска вводите : SCRIPT-НАЗВАНИЕ СТРАНИЦЫ
  Для быстрого поиска свайпера в поле поиска вводите : SWIPERS-НАЗВАНИЕ СТРАНИЦЫ
*/

function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  // Добавлние класса _webp или _no-webp для HTML
  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
}

isWebp();

document.addEventListener('DOMContentLoaded', function () {
  //////////////////////////////// SCRIPT-HEADER //////////////////////////////////
  if (document.querySelector('.header')) {
    const header = document.querySelector('.header');
    const headerButton = header.querySelector('.header__button');
    const headerButtonNavigate = header.querySelectorAll('.header__popup-item');
    const headerPopup = header.querySelector('.header__popup');
    const headerPopupClose = headerPopup.querySelector('.header__popup-close');
    const headerOverlay = header.querySelector('.overlay');

    headerButton.addEventListener('click', () => {});
    // Событие если нажимают на элемент меню
    headerButtonNavigate.forEach((element) => {
      element.addEventListener('click', () => {
        headerButtonNavigate.forEach((element) => {
          element.classList.remove('active');
        });
        element.classList.add('active');
      });
    });
    // Событие для открытия меню
    headerButton.addEventListener('click', () => {
      // headerOverlay.style.display = 'block';
      headerPopup.style.display = 'block';
    });
    // Событие для закрытия меню
    headerPopupClose.addEventListener('click', () => {
      // headerOverlay.style.display = 'none';
      headerPopup.style.display = 'none';
    });
  }
  //////////////////////////////// SCRIPT-REALTY //////////////////////////////////
  if (document.querySelector('.realty')) {
    const realty = document.querySelector('.realty');
    const realtyTypeComponents = realty.querySelectorAll(
      '.realty-type__component'
    );
    realtyTypeComponents[0].classList.add('active');
    // Cобытие если нажимают на плашку с подвидом недвижимости
    realtyTypeComponents.forEach((component) => {
      component.addEventListener('click', () => {
        realtyTypeComponents.forEach((component) => {
          component.classList.remove('active');
        });
        component.classList.add('active');
      });
    });
  }
});

//////////////////////////////// SWIPERS //////////////////////////////////

const rem = function (rem) {
  if (window.innerWidth > 768) {
    return 0.005208335 * window.innerWidth * rem;
  } else {
    // где 375 это ширина моб версии макета
    return (100 / 375) * (0.1 * window.innerWidth) * rem;
  }
};

//////////////////////////////// SWIPERS-MAIN //////////////////////////////////

const swiperMainFirst = new Swiper('.swiper-main-second', {
  pagination: {
    el: '.swiper-main-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  loop: true,
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
});

//////////////////////////////// SWIPERS-PROJECT //////////////////////////////////

const swiperProjectFirst = new Swiper('.swiper-project', {
  pagination: {
    el: '.swiper-project-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  loop: true,
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
});

//////////////////////////////// SWIPERS-REALTY //////////////////////////////////

const swiperRealtyFirst = new Swiper('.swiper-realty', {
  pagination: {
    el: '.swiper-realty-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  loop: true,
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
});
