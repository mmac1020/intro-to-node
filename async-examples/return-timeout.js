let anotherFunction = (input) => {
  console.log(input);
};

let x = setTimeout(function () {
  const work = 1000 * 1000000;
  anotherFunction(work);
}, 500);
