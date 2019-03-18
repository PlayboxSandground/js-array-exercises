function sum (array) {
  return array.reduce((accumulator, currentValue)=> accumulator + currentValue)
}

function productAll (array) {
  return array.reduce((accRow, row)=> {
    return accRow * row.reduce((accValue, value)=> { 
      return value * accValue
    })
  })
}

function objectify (array) {
  // your code here

}

function luckyNumbers (array) {
  // your code here
}


module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
