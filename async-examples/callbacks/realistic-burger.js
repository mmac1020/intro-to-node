const orderBurger = function(nextStep) {
  try {
    getBeef(function (beef) {
      cookBeef(beef, function (cookedBeef) {
        getBuns(function (buns) {
          putBeefBetweenBuns(buns, cookedBeef, function(burger) {
            nextStep(burger)
          })
        })
      })
    })  
  } catch(error) {
    console.log(error);
  }
}

let serveBurger = function(burgerMessage) {
  console.log(burgerMessage);
}

orderBurger(serveBurger);