let orderBurger = function(callback) {
  setTimeout(function cookBurger(){
    callback('Your burger is ready');
  }, 1000);
}

let serveBurger = function(burgerMessage) {
  console.log(burgerMessage);
}

orderBurger(serveBurger);