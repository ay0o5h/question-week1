
function minMax(arr){
    let arr1=[]
   let a=Math.max(...arr) 
    let b=Math.min(...arr)
  
        arr1.push(b,a)

   
   return arr1
}


console.log(minMax([1, 2, 3, 4, 5])) 

console.log(minMax([2334454, 5]) )

console.log(minMax([1]))