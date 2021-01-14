setTimeout(function() {
  console.log('first async call');
}, 1000);

setTimeout(function() {
  console.log('second async call');
}, 100);

setTimeout(function() {
  console.log('third async call');
}, 200);

let x = setTimeout(function() {
  return '10 seconds have passed';
}, 10000)

console.log(x);
