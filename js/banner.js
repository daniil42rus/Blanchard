document.addEventListener('DOMContentLoaded', function () {

  // Hero slider
  const swiper__hero = document.querySelector('.swiper__hero')
  var mySwiperHero = new Swiper(swiper__hero, {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,

    }
  });


  // header scroll
  document.querySelectorAll('.header__bottom__scroll').forEach(function (bottomScroll) {
    new SimpleBar((bottomScroll), {
      autoHide: false,
      scrollbarMaxSize: 25,
    })

  })


  // new SimpleBar(document.querySelector(".header__bottom__scroll"), {
  //   autoHide: false,
  //   scrollbarMaxSize: 25,
  // });


  document.querySelectorAll(".header__btn").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header__bottom__content");

      document.querySelectorAll(".header__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("header__btn-active");
        }
      });

      document.querySelectorAll(".header__bottom__content").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("header__bottom__content-active");
        }
      })
      dropdown.classList.toggle("header__bottom__content-active");
      btn.classList.toggle("header__btn-active")
    })
  })


  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header__bottom__list")) {
      document.querySelectorAll(".header__bottom__content").forEach(el => {
        el.classList.remove("header__bottom__content-active");
      })
      document.querySelectorAll(".header__btn").forEach(el => {
        el.classList.remove("header__btn-active");
      });
    }
  })


  // Gallery

  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
  });



  const swiper__gallery = document.querySelector('.swiper__gallery')
  var mySwiperGallery = new Swiper(swiper__gallery, {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination__gallery",
      type: "fraction",
    },
    navigation: {
      nextEl: ".my__swiper-button-next__gallery",
      prevEl: ".my__swiper-button-prev__gallery",
    },
  });




  // catalog accordion

  $(function () {
    $("#accordion").accordion({
      heightStyle: "content",
      active: false,
      collapsible: true
    });
  });


  const swiper__events = document.querySelector('.swiper__events')
  var mySwiperGallery = new Swiper(swiper__events, {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination__events",
    },
    navigation: {
      nextEl: ".swiper-button-next__events",
      prevEl: ".swiper-button-prev__events",
    },
  });

  // project-slider


  const swiper__project = document.querySelector('.swiper__project')
  var mySwiperGallery = new Swiper(swiper__project, {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next__project",
      prevEl: ".swiper-button-prev__project",
    },
  });



  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);
  new JustValidate('.contact__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },

    },
    messages: {
      name: {
        minLength: "Поле должно содержать минимум :value символа.",
        required: 'Как вас зовут?'
      },
      tel: {
        "function": 'Неверный номер телефона',
        required: 'Укажите ваш телефон'
      }
    }
  });


  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("myMap1", {
      center: [55.760591, 37.614832],
      zoom: 14,
      controls: []
    });
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-5, -38]
    }),
      // Размещение геообъекта на карте.
      myMap.geoObjects.add(myPlacemark);
  }






})