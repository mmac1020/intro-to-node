// require is how we 'import' or access other files' work
// This require takes the module.export object and allows you to assign it to a variable.
// const superCoolReusableFunction = require('./a-module');
// superCoolReusableFunction.functionA();
// superCoolReusableFunction.functionB();

// require === {
//   functionA: superCoolReusableFunction,
//   functionB: someOtherCoolFunction
// }
console.log(require('./sub-directory/sub-module'))
console.log(this);
const { functionA } = require('./a-module');

functionA();
// functionB();
