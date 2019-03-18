function multiplyBy10 (array) {
  return array.map((element) => element * 10)
};

function shiftRight (array) {
  return array.map((_element, index) => {
    if(index === 0){
      return array[array.length - 1]
    }
    else return array[index - 1]
  })
}

function onlyVowels (array) {
  return array.map((element) => 
    (element.split('').map((char) => 
      char.match(/[aeiou]/ig))).join(''))
  };

function doubleMatrix (array) {
  return array.map((row) => row.map((element) => element*2))
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};