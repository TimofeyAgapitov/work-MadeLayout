/*  
  Для быстрого поиска скрипта в поле поиска вводите : SCRIPT-НАЗВАНИЕ СТРАНИЦЫ
  Для быстрого поиска свайпера в поле поиска вводите : SWIPERS-НАЗВАНИЕ СТРАНИЦЫ
*/

wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: true,
  live: true,
});

wow.init();

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
  //////////////////////////////// SCRIPT-POPUP //////////////////////////////////
  if (document.querySelector('.popup')) {
    const popupArray = document.querySelectorAll('.popup');
    popupArray.forEach(function (element) {
      element
        .querySelector('.popup-overlay')
        .addEventListener('click', function () {
          element.style.display = 'none';
        });
    });
  }
  //////////////////////////////// SCRIPT-HEADER //////////////////////////////////
  if (document.querySelector('.header')) {
    const header = document.querySelector('.header');
    const headerButton = header.querySelector('.header__button');
    const headerButtonNavigate = header.querySelectorAll('.header__popup-item');
    const headerPopup = header.querySelector('.header__popup');
    const headerPopupContainer = headerPopup.querySelector(
      '.header__popup-container'
    );
    const headerPopupClose = headerPopupContainer.querySelector(
      '.header__popup-close'
    );

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
      headerPopup.style.display = 'block';
    });
    // Событие для закрытия меню
    headerPopupClose.addEventListener('click', () => {
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
      component.addEventListener('mouseover', () => {
        realtyTypeComponents.forEach((component) => {
          component.classList.remove('active');
        });
        component.classList.add('active');
      });
    });
  }
  //////////////////////////////// SCRIPT-SUBCATEGORIES //////////////////////////////////
  if (document.querySelector('.subcategories')) {
    const subcategories = document.querySelector('.subcategories');
    const subcategoriesProjectsButton =
      subcategories.querySelectorAll('.filters__button');
    // Событие при нажатии на элемент хлебной крошки
    subcategoriesProjectsButton.forEach((button) => {
      button.addEventListener('click', () => {
        subcategoriesProjectsButton.forEach((button) => {
          button.classList.remove('active');
        });
        button.classList.add('active');
      });
    });
  }
});
//////////////////////////////// SCRIPT-PARTNERS //////////////////////////////////
if (document.querySelector('.partners')) {
  const partners = document.querySelector('.partners');
  const partnersContent = partners.querySelector('.content-right');
  const partnersArray = partners.querySelectorAll('.partners-box');

  const partnersElement = document.createElement('div');
  partnersElement.classList.add('partners-box', 'disactive');

  setInterval(() => {
    partnersContent.classList.add('animationLight');
    setTimeout(() => {
      partnersContent.classList.remove('animationLight');
    }, 5000);
  }, 8000);

  if (screen.width > 768 && partnersArray.length != 9) {
    partnersContent.appendChild(partnersElement);
  } else {
    partnersContent.removeChild(partnersElement);
  }
}

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
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: true,
  // },
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

//////////////////////////////// CURSOR //////////////////////////////////

const customCursorBlocks = document.querySelectorAll('.content-custom-cursor');
const customCursor = document.querySelector('.custom-cursor');
const circle = customCursor.querySelector('.circle');
const cursor = customCursor.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  // Обновляем позицию кастомного курсора в соответствии с позицией указателя мыши.
  customCursor.style.left = e.pageX - 16 + 'px';
  customCursor.style.top = e.pageY - 12 + 'px';
});

// Добавляем слушатель события окончания анимации .circle
circle.addEventListener('animationend', () => {
  // Удаляем класс .hide для отображения .cursor после окончания анимации .circle
  cursor.classList.add('show');
});

customCursorBlocks.forEach(function (element) {
  element.addEventListener('mouseenter', (e) => {
    customCursor.style.display = 'block';
    document.body.style.cursor = 'none';
    e.stopPropagation(); // Предотвращаем распространение события на родительский customCursor
  });
  element.addEventListener('mouseleave', (e) => {
    customCursor.style.display = 'none';
    document.body.style.cursor = 'auto';
    e.stopPropagation(); // Предотвращаем распространение события на родительский customCursor
  });
  element.addEventListener('click', () => {
    cursor.classList.add('click');
    setTimeout(() => {
      cursor.classList.remove('click');
    }, 250);
  });
});
