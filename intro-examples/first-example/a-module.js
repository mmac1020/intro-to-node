// in browser JS we have these globals
// window, document, alert, etc.
// these DO NOT exist in node.js!!!!!!!!!!!!!!!!!!!!!!!!!
// https://nodejs.org/docs/latest-v14.x/api/globals.html

const mac = {
  name: 'mac',
  job: 'instructor',
};

const sarah = {
  name: 'sarah',
  job: 'instructor',
};

const anotherFunction = () => {
  console.log('Hello mac', mac);
};

const someFunction = () => {
  anotherFunction();
};

// default export
// module.exports = someFunction;

// our object export
module.exports = {
  sarah,
  someFunction,
};
