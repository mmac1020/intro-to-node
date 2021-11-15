const callbackFunction = (data) => {
  console.log(data);
}

let x = setTimeout(function () {
  const work = 1000 * 1000000;
  callbackFunction(work)
}, 10000);

// console.log(x);
