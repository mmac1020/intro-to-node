// in browser JS we have these globals
// window, document, alert, etc.
// these DO NOT exist in node.js!!!!!!!!!!!!!!!!!!!!!!!!!
// https://nodejs.org/docs/latest-v14.x/api/globals.html

const mac = {
  name: 'mac',
  job: 'instructor',
};

const joe = {
  name: 'joe',
  job: 'instructor',
};

const anotherFunction = () => {
  console.log('Hello mac', mac);
};

const someFunction = () => {
  anotherFunction();
};

// Default export
// module.exports = joe;

// our object export
module.exports = {
  mac: mac,
  joe: joe,
  someFunction: someFunction,
};
