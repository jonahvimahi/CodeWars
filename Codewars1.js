//Reverse Words
function reverseWords(str){
    let arr = str.split(" ")
    let newArr = arr.reverse().join(" ")
    return newArr
  }

  //Negative Connotation
  function connotation(str) {
    let strArr = str.split(" ").toLowerCase()
    let firstAlph = ('abcdefghijklm')
    let secondAlph = ('nopqrstuvwxyz')
    let count = 0
  
    for(let i = 0; i < strArr.length; i++){
      if(firstAlph.includes(strArr[i].charAt(0))){
        count++
      } else{
        count--
      }
    }
    return count >= 0 ? true: false
  }
  
  connotation("A big brown fox caught a bad bunny")

//Opposites Attract
function lovefunc(flower1, flower2){
    let sum = flower1 + flower2
    if(sum % 2 === 0){
      return false
    } else{
      return true
    }
  }

  //Reverse Words
  function reverseWords(str) {
    let newStr = str.split(" ")
    finalArr = []
  
    for(let i = 0; i < newStr.length; i++){
      finalArr.push(newStr[i].split("").reverse().join(""))
    }
    return finalArr.join(' ')
  }
  //Vowel Count
  function getCount(str) {
    var vowelsCount = 0;
    let vowels = "aeiou"
    let vowelsArr = vowels.toLowerCase().split("")
  
    for(let i = 0; i < str.length; i++){
    if(vowelsArr.includes(str[i])){
      vowelsCount++
    }
  }  
    return vowelsCount
  }
  
  getCount('jonah and devin and sam')

  //Square Every Digit
  function squareDigits(num){
    let arr = num.toString().split("")
    for(let i = 0; i < arr.length; i++){
     arr[i] = Math.pow(arr[i], 2)
    }
    console.log(arr.join(""))
   return+arr.join("")
  }

  //Sum of Digits / Digital Root
  function digital_root(n) {
    let sum = 0
    let arr = n.toString().split("")
    for(let i = 0; i < arr.length; i++){
      sum += +arr[i]
    }
    if(sum.toString().length > 1){
      return digital_root(sum)
    } else {
      return sum
    }
  }

  //Build Tower
  function towerBuilder(nFloors) {
    let building = []
    for(let i = 1; i <= nFloors; i++){
      let floorsLeft = nFloors-i
      let floorSpace = " ".repeat(floorsLeft)
      let floor = '*'.repeat((i*2)-1)
      building.push(`${floorSpace}${floor}${floorSpace}`)
  }
    return building
  }

  //Find the odd int
  function findOdd(A) {
    let oddNums = {}
    for(let i = 0; i < A.length; i++){
      if(oddNums.hasOwnProperty(A[i])){
        delete oddNums[A[i]]
      } else{
        oddNums[A[i]] = A[i]
      }
    }
    return oddNums[Object.keys(oddNums)[0]];
  }
  findOdd([5,4,3,2,1,5,4,3,2,10,10])

  //Move Zeroes
  var moveZeros = function (arr) {
    let zeroArr = []
    let otherArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 0){
        zeroArr.push(0)
      } else {
        otherArr.push(arr[i])
      }
    }
    let finalArr = [...otherArr, ...zeroArr]
    return finalArr
  }
  moveZeros([1,2,0,1,0,1,0,3,0,1])

  //Stop spinning my word 
  function spinWords(string){
    let arr = string.split(" ")
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length >= 5){
        let word = arr[i].split("").reverse().join("")
        arr[i] = word
      }
    
    }
    return arr.join(" ")
  }
  //THIS IS A LEVEL 4
    //THIS IS A LEVEL 4
      //THIS IS A LEVEL 4
        //THIS IS A LEVEL 4
        function add(a, b) {
          let arrA = a.split('').reverse()
          let arrB = b.split('').reverse()
          let answerStr = ''
          let remainder = 0
          for (let i=0; i < Math.max(a.length, b.length); i++) {
            let num1 = 0;
            let num2 = 0;
            if (arrA[i]) {
              num1 = +arrA[i]
            }
            if (arrB[i]) {
              num2 = +arrB[i]
            }
            let answer = num1 + num2 + remainder
            remainder = 0
            if (answer > 9) {
              answerStr += (answer - 10).toString()
              remainder = 1
            } else {
              answerStr += answer.toString()
            }
          }
          if (remainder === 1) {
            answerStr += '1'
          }
          return answerStr.split('').reverse().join('')
        }


// You're a square!
const isSquare = function(n){
  return Math.sqrt(n) % 1 === 0;
}

// Multiples of 3 0r 5

function solution(number){
  let multiples = []
  
  for(let i = 0; i < number; i++){
    if(number % 5 === 0 || number % 3 === 0){
      multiples.push(i)
    }
  }
  return multiples.reduce((a,b) => a + b, 0)
}