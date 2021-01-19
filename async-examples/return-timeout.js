setTimeout(function () {
  console.log('first async call');
}, 1000);

setTimeout(function () {
  console.log('second async call');
}, 100);

setTimeout(function () {
  console.log('third async call');
}, 200);

function whateverIWant(data) {
  console.log(`Whatever I want ${data}`);
}

setTimeout(function () {
  const data = 100000000 * 123109213;
  whateverIWant(data);
}, 10000);
