let addSugar = function(mixture) {
  console.log('add sugar');
  mixture.sugarAdded = true;
  addSpice(mixture);
}

let addSpice = function(mixture) {
  console.log('add spice');
  mixture.spiceAdded = true;
  addEverythingNice(mixture);
}

let addEverythingNice = function(mixture) {
  console.log('add everything nice');
  mixture.everythingNiceAdded = true;
}

let accidentallyAddChemicalX = function(mixture) {
  console.log('oops, chemical x added');
  mixture.chemicalXAdded = true;
}

let createPowerpuffGirls = function() {
  const mixture = {};
  addSugar(mixture);
  accidentallyAddChemicalX(mixture);
  mixture.isPowerpuffGirl = true;
  return mixture;
}

console.log(createPowerpuffGirls());