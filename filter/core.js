function onlyEven (array) {
  return array.filter((element) => (element % 2 === 0))
};

function onlyOneWord (array) {
  return array.filter((sentence)=>(sentence.split(' ').length === 1))
};

function positiveRowsOnly (array) {
  return array.filter((row) => 
    row.every((integer) => integer >= 0)
  )
};

function allSameVowels (array) {
  return array.filter((word)=>{
    let firstVowel = true
    let vowel2compare
    return word.split('').every((char) => {
      if(char.match(/[aeoiu]/ig)){
        if (firstVowel) {
          vowel2compare = char
          firstVowel = false
        }
        else if (vowel2compare !== char) return false
      }
      return true
    })
  })
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};