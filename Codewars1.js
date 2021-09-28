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
