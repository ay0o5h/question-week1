


function concat() {
   
   arr=Array.from(arguments);
   return [].concat(...arr)
   
}


console.log(concat([1, 2, 3], [4, 5, 6],[7, 8,6,]) )

console.log(concat([1], [2], [3], [4], [5], [6], [7])) 

console.log(concat([1, 2], [3, 4]))

console.log(concat([4, 4, 4, 4, 4]) )
