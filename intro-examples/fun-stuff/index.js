const mainMenu = `Let's get started with some commands:
    Input 1 for a greeting
    Input 2 to see all my burger recommendations
    Input 3 for a random nyc burger recommendation
    Input 4 to add a burger restaurant
  `;
process.stdout.write(mainMenu);

const { getOneBurgerPlace, getAllBurgers } = require('./burgers');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // This removes newlines and spaces
  console.log('this is the command', cmd);
  switch (cmd) {
    case '1':
      process.stdout.write('Hello');
      break;
    case '2':
      process.stdout.write(getAllBurgers().toString());
      break;
    case '3':
      // What do we do here??
      process.stdout.write(getOneBurgerPlace());
      break;
    case '4':
      // What do we do here??
      break;
    default:
      process.stdout.write("I'm sorry, I didn't understand that :(");
  }
  process.stdout.write(`\n${mainMenu}`);
});
