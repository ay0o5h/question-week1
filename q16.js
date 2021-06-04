function secondLargest(arr){
  
    let max = Math.max.apply(null, arr); 
    arr.splice(arr.indexOf(max), 1); 
    return Math.max.apply(null, arr);
}


console.log(secondLargest([10, 40, 30, 20, 50]))
 
console.log(secondLargest([25, 143, 89, 13, 105]))
 
console.log(secondLargest([54, 23, 11, 17, 10]))
 