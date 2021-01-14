const bestBurgersNYC = [
  'Kings Of Kobe',
  'Yn',
  "Ruby's Cafe",
  'Au Cheval',
  'Bensons',
];

function getOneBurgerPlace() {
  //Get a random awesome burger place
  return bestBurgersNYC[Math.floor(Math.random() * bestBurgersNYC.length)];
}

console.log(getOneBurgerPlace());
