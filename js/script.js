/*-----Объявление переменных-----*/

// Объект формы обратной связи
try {
  var feedbackWrap = document.querySelector(".feedback-message");
  var feedback = {
    link: document.querySelector(".contacts-btn"),
    form: feedbackWrap.querySelector(".feedback-form"),
    name: feedbackWrap.querySelector(".feedback-name"),
    email: feedbackWrap.querySelector(".feedback-email"),
    text: feedbackWrap.querySelector(".feedback-text"),
    sent: feedbackWrap.querySelector(".feedback-sent"),
    close: feedbackWrap.querySelector(".feedback-close"),
    delErrorBorder: function(){
      if(this.form.querySelector(".form-error")){
        this.text.classList.remove("form-error");
        this.name.classList.remove("form-error");
        this.email.classList.remove("form-error");
      }
    },
    closePopup: function(){
      this.delErrorBorder();
      feedbackWrap.classList.remove("feedback-message-show");
      overlay.close();
    }
  };
} catch(err){}

// Объект карты
try {
  var map = {
    link: document.querySelector(".map-address"),
    box: document.querySelector(".map-popup"),
    closePopup: function () {
      this.box.classList.remove("map-popup-show");
      overlay.close();
    }
  };
  map.closeBtn = map.box.querySelector(".map-popup-close");
} catch (err){}


// Объект перекрывающего фона
try{
  var overlay = {
    link: document.querySelector(".feedback-overlay"),
    box: document.querySelector(".overlay"),
    open: function () {
      this.box.classList.add("overlay-show");
    },
    close: function () {
      this.box.classList.remove("overlay-show");
    }
  };
} catch (err){}

// Объект слайдера
try{
  var slider = {
    box: document.querySelector(".slider-wrap"),
    slideBtnShow: function (num){
      var slideBtnSelected = this.box.querySelector(".slide-btn-selected");
      var slideShow = this.box.querySelector(".slide-show");

      slideBtnSelected.classList.remove("slide-btn-selected");
      this.btns[num].classList.add("slide-btn-selected");
      slideShow.classList.remove("slide-show");
      this.slides[num].classList.add("slide-show");
    },
    slideNext: function () {
      for (var i=0; i < this.slides.length; i++){
        if (this.slides[i].classList.contains("slide-show")){
          if (i !== this.slides.length - 1){
            this.slides[i].classList.remove("slide-show");
            this.slides[i+1].classList.add("slide-show");
            this.btns[i].classList.remove("slide-btn-selected");
            this.btns[i+1].classList.add("slide-btn-selected");
            break;
          }
          else{
            this.slides[i].classList.remove("slide-show");
            this.slides[0].classList.add("slide-show");
            this.btns[i].classList.remove("slide-btn-selected");
            this.btns[0].classList.add("slide-btn-selected");
          }
        }
      }
    },
    slideLast: function () {
      for (var i = slider.slides.length - 1; i >= 0; i--){
        if (slider.slides[i].classList.contains("slide-show")){
          if (i !== 0){
            slider.slides[i].classList.remove("slide-show");
            slider.slides[i-1].classList.add("slide-show");
            slider.btns[i].classList.remove("slide-btn-selected");
            slider.btns[i-1].classList.add("slide-btn-selected");
            break;
          }
          else{
            slider.slides[i].classList.remove("slide-show");
            slider.slides[slider.slides.length - 1].classList.add("slide-show");
            slider.btns[i].classList.remove("slide-btn-selected");
            slider.btns[slider.btns.length - 1].classList.add("slide-btn-selected");
          }
        }
      }
    }
  };
  slider.slides = [].slice.call(slider.box.querySelectorAll(".slider-item"), 0);
  slider.btns = [].slice.call(slider.box.querySelectorAll(".slide-btn"), 0);
  slider.lastBtn = slider.box.querySelector(".slide-switch-last");
  slider.nextBtn = slider.box.querySelector(".slide-switch-next");
  slider.slide1Btn = slider.box.querySelector(".slide-1-btn");
  slider.slide2Btn = slider.box.querySelector(".slide-2-btn");
} catch (err){}

// Объект сервисов
try {
  var services = {
    box: document.querySelector(".service-columns"),
    itemShow: function(num){
      var linkActive = this.box.querySelector(".service-link-active");
      var itemActive = this.box.querySelector(".service-details-active");

      linkActive.classList.remove("service-link-active");
      itemActive.classList.remove("service-details-active");
      this.links[num].classList.add("service-link-active");
      this.items[num].classList.add("service-details-active");
    }
  };
  services.links = [].slice.call(services.box.querySelectorAll(".service-link"), 0);
  services.items = [].slice.call(services.box.querySelectorAll(".service-details-block"), 0);
} catch(err){

}

// Объект корзины
try{
  var basket = {
    box: document.querySelector(".basket"),
    refill: function(){
      this.quantity = parseInt(this.box.querySelector(".basket span").textContent);
      this.quantity += 1;
      this.box.querySelector(".basket span").textContent = String(this.quantity);
      this.box.classList.add("basket-full")

    }
  };
}catch(err){}

// Объект карточек товаров
try {
  var product = {
    box: document.querySelector(".product-list")
  };
  product.buyBtn = [].slice.call(product.box.querySelectorAll(".product-buy"), 0);
  product.newPriceBtn = [].slice.call(product.box.querySelectorAll(".new-price"), 0);
} catch (err){}

// Объект сообщения добавления в корзину
try {
  var orderMes = {
    box: document.querySelector(".order-message"),
    show: function(){
      this.box.classList.add("order-message-show");
      overlay.open();
    },
    close: function(){
      this.box.classList.remove("order-message-show");
      overlay.close();
    }
  };
  orderMes.regBtn = orderMes.box.querySelector(".order-registration");
  orderMes.closeBtns = [].slice.call(orderMes.box.querySelectorAll(".order-message-close"), 0);
} catch(err){}


/*-----Слайдер-----*/
try{
  // Перключение персональными кнопками
  slider.btns.forEach(function (elem, i) {
    elem.addEventListener("click", function (evt) {
      evt.preventDefault();
      slider.slideBtnShow(i);
    });
  });

  // Переключение кнопаками "Вперед", "Назад"
  slider.nextBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    slider.slideNext();
  });
  slider.lastBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    slider.slideLast();
  });
} catch (err){}

/*-----Сервисы-----*/
try{
  services.links.forEach(function (elem, i){
    elem.addEventListener("click", function (evt){
      evt.preventDefault();
      services.itemShow(i);
    });
  });
} catch (err){}

/*-----Попап обратной связи-----*/
// Клик по ссылке
try{
  feedback.link.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.open();
    feedbackWrap.classList.add("feedback-message-show");
    feedback.name.focus();
  });

  // Отправка формы
  feedback.form.addEventListener("submit", function(evt){
    feedback.delErrorBorder();
    if (!feedback.name.value){
      evt.preventDefault();
      feedback.name.classList.add("form-error");
    }
    if (!feedback.email.value){
      evt.preventDefault();
      feedback.email.classList.add("form-error");
    }
    if (!feedback.text.value){
      evt.preventDefault();
      feedback.text.classList.add("form-error");
    }
  });

  // Удаление рамки ошибки
  feedback.name.addEventListener("focus", function(evt){
    evt.preventDefault();
    feedback.delErrorBorder();
  });
  feedback.email.addEventListener("focus", function(evt){
    evt.preventDefault();
    feedback.delErrorBorder();
  });
  feedback.text.addEventListener("focus", function(evt){
    evt.preventDefault();
    feedback.delErrorBorder();
  });

  // Кнока закрытия формы
  feedback.close.addEventListener("click", function(evt){
    evt.preventDefault();
    feedback.closePopup();
  });
} catch(err){}

/*-----Попап карты-----*/
try{
  map.link.addEventListener("click", function(evt){
    evt.preventDefault();
    map.box.classList.add("map-popup-show");
    overlay.open();
    map.closeBtn.focus();
  });
  map.close = map.box.querySelector(".map-popup-close");
  map.close.addEventListener("click", function(evt){
    evt.preventDefault();
    map.closePopup();
  });
} catch(err){}

/*-----Сообщение добавления в корзину-----*/
try{
  product.buyBtn.forEach(function (elem){
    elem.addEventListener("click", function(evt){
      evt.preventDefault();
      basket.refill();
      orderMes.show();
      orderMes.regBtn.focus();
    });
  });
  product.newPriceBtn.forEach(function (elem){
    elem.addEventListener("click", function(evt){
      evt.preventDefault();
      basket.refill();
      orderMes.show();
      orderMes.regBtn.focus();
    });
  });
  orderMes.closeBtns.forEach(function (elem){
    elem.addEventListener("click", function(evt) {
      evt.preventDefault();
      orderMes.close();
    });
  });
} catch(err){}

/*-----Overlay-----*/
try{
  overlay.box.addEventListener("click", function(evt){
    evt.preventDefault();
    if (document.querySelector(".feedback-message-show")){
      feedback.closePopup();
    }
    if (document.querySelector(".map-popup-show")){
      map.closePopup();
    }
    if (document.querySelector(".order-message-show")){
      orderMes.close();
    }
  });
} catch (err){}

/*-----Нажатие на esc-----*/
try{
  document.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27){
      if (document.querySelector(".feedback-message-show")){
        evt.preventDefault();
        feedback.closePopup();
      }
      if (document.querySelector(".map-popup-show")){
        evt.preventDefault();
        map.closePopup();
      }
      if (document.querySelector(".order-message-show")){
        evt.preventDefault();
        orderMes.close();
      }
    }
  });
} catch (err){}
