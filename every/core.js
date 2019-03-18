// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every((number) => number % 2 === 0)
};

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  const iniType = typeof input[0]
  return input.every((element) => typeof element === iniType)
};

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every((column) => {
    return column instanceof Array && column.every((number) => number > 0)
  })
};

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {
  const isVowel = /[aeiou]/i
  const vowels = "aeiou".split('');
  const firstVowel = function(letter) {
    return ~"aeiou".indexOf(letter) }

  return input.every((word) => word instanceof String && 
  word.split('').every((char) => {
    if(char.match(isVowel) && firstVowel){
      firstVowel = char
      return
    }
  }
  ))
}

// function allSameVowels (input) {
//   const vowels = 'aeiou'.split('')
//   const oks = input.filter(i => {
//     const used = vowels.filter(v => i.includes(v))
//     return used.length === 1 // always the same
//   })
//   return oks.length === input.length
// }

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
