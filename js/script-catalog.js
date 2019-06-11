// Объявление переменных
var basket = {
  box: document.querySelector(".basket"),
  refill: function(){
    this.quantity = parseInt(this.box.querySelector(".basket span").textContent);
    this.quantity += 1;
    this.box.querySelector(".basket span").textContent = String(this.quantity);
    this.box.classList.add("basket-full")

  }
};

var product = {
  box: document.querySelector(".product-list")
};
product.buyBtn = [].slice.call(product.box.querySelectorAll(".product-buy"), 0);

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
orderMes.closeBtns = [].slice.call(orderMes.box.querySelectorAll(".order-message-close"), 0);

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

/*-----Сообщение добавления в корзину-----*/
product.buyBtn.forEach(function (elem){
  elem.addEventListener("click", function(evt){
    evt.preventDefault();
    basket.refill();
    orderMes.show();
  });
});
orderMes.closeBtns.forEach(function (elem){
  elem.addEventListener("click", function(evt) {
    evt.preventDefault();
    orderMes.close();
  });
});


/*-----Overlay-----*/
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

/*-----Нажатие на esc-----*/
document.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27){
    if (document.querySelector(".order-message-show")){
      evt.preventDefault();
      orderMes.close();
    }
  }
});


