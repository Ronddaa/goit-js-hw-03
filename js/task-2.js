function makeArray(firstArray, secondArray, maxLength) {

 let mass = firstArray.concat(secondArray);
  let newMass;
  if (mass.length > maxLength) {
    newMass = mass.slice(0, maxLength);
  } else {
    newMass = mass;
  }
  return newMass;

  // Или сделать так, но по условиям зачем то нужен if ... else

  // let mass = firstArray.concat(secondArray);
  // let newMass = mass.slice(0, maxLength);
  // return newMass;

}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
