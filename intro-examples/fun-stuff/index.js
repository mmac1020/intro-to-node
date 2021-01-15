const mainMenu = `Let's get started with some commands:
    Input 1 for a greeting
    Input 2 for a nyc restaurant recommendation
    Input 3 to output whatever text you want to a file-to-write.txt
    Input 4 to read the file-to-read.txt
  `;
const { getOneBurgerPlace } = require('./burgers');
const fs = require('fs');
process.stdout.write(mainMenu);

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // This removes newlines and spaces
  switch (cmd) {
    case '1':
      process.stdout.write('Hello');
      break;
    case '2':
      process.stdout.write(getOneBurgerPlace());
      break;
    case '3':
      const writeFileName = 'file-to-write.txt';
      fs.readFileSync();
      fs.writeFileSync(writeFileName, cmd);
      //What do we do here?
      break;
    case '4':
      //What do we do here?
      break;
    default:
      process.stdout.write("I'm sorry, I didn't understand that :(");
  }
  process.stdout.write(`\n${mainMenu}`);
});
