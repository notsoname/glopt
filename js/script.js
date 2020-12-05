window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeMenu = document.querySelector('.menu__close'),
          overlay = document.querySelector('.menu__overlay');


    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow ='hidden';
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow ='';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            menu.classList.remove('active');
            document.body.style.overflow ='';
        }
    });

    //* modal

    const modal = document.querySelector('.modal'),
          overlayModal = document.querySelector('.overlay'),
          closeModal = document.querySelector('.modal__close'),
          btnModal = document.querySelector('.modal__btn'),
          triggerModal = document.querySelectorAll('.header__btn');

/*     triggerModal.addEventListener('click', () => {
        overlayModal.classList.add('show');
        document.body.style.overflow ='hidden';
    }); */

    closeModal.addEventListener('click', () => {
        overlayModal.classList.remove('show');
        document.body.style.overflow ='';
    });

    overlayModal.addEventListener('click', (e) => {
    if (e.target === overlayModal) {
        overlayModal.classList.remove('show');
        document.body.style.overflow ='';
    }
    });

    triggerModal.forEach((btn) => {
        btn.addEventListener('click', () => {
            overlayModal.classList.add('show');
            document.body.style.overflow ='hidden'; 
        });
    });
});

$(document).ready(function(){
  $('.slider__wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left-arrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right-arrow.svg"></button>',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  });