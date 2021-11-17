// Break camelCase
function solution(string){
   let arr = string.split("")
    let newArr = []
    console.log(arr)
   for(let i = 0; i < arr.length; i++){
       console.log(arr[i])
       newArr.push(arr[i])
       if(arr[i + 1] === arr[i + 1].toUpperCase()){
        newArr.push(" ")
       }
   }
   return newArr.join("")
}

console.log(solution("zachIsHot"))

// Shortest Word
function findShort(s){
    let arr = s.split(" ").sort((a, b) => {
      return a.length - b.length
    })
    console.log(arr)
    return arr[0].length
  }
  findShort("zach is so damn hot")

//   Remove first and last character
function removeChar(str){
    let arr = str.split("")
    arr.splice(0, 1)
    arr.pop()
  
    return arr.join("")
  
  };
  