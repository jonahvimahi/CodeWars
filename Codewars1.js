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