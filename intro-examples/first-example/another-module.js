// Object Destructuring
/**
 * {
 *  joe: joe
 *  someFunction: someFunction
 * }
 */

// Object importing
const { joe, mac, someFunction } = require('./a-module');

someFunction();

console.log(joe);

/**
 *
 * {
 *  name: 'joe',
 *  job: 'instructor'
 * }
 */

// default import
// const whateverIWant = require('./a-module');

// console.log(whateverIWant);
