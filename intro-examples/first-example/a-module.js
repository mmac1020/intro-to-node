// in browser JS we have these globals
// window, document, alert, etc.
// these DO NOT exist in node.js!!!!!!!!!!!!!!!!!!!!!!!!!
// https://nodejs.org/docs/latest-v14.x/api/globals.html

// A nice note is that we DON'T include .js
// require('./sub-directory/sub-module');

// if we DON'T specify the file, require will look for an index.js
// require('.');

// Require looks for this module inside of a "node_modules" folder
// require('a-module');

const superCoolReusableFunction = () => {
  console.log('hello world')
}

const someOtherCoolFunction = () => {
  console.log('hello world from other function');
}

const privateFunctionToAmodule = () => {
  console.log('does some aModule stuff');
}

// 'module' is just a file.

// module.exports is an object that says "anyone that requires me, will get what I am assigned to"

// this is called the DEFAULT export
// module.exports = superCoolReusableFunction,

// Object export or explicit export
module.exports = {
  functionA: superCoolReusableFunction,
  functionB: someOtherCoolFunction
}

// object shorthand notation
// module.exports = {
//   superCoolReusableFunction,
//   someOtherCoolFunction
// }

// these are equivalent
// module.exports = {
//   superCoolReusableFunction: superCoolReusableFunction,
//   someOtherCoolFunction: someOtherCoolFunction
// }
