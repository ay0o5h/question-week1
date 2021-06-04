function fizzBuzz(n){
    let arr=[]
    for(let i=1; i<= n ; i++){
        
        if(i%3==0 && i%5==0 ){
    
            arr.push('fizzBuzz')
        }else if (i%5==0){
            arr.push('Buzz')
        }else if (i%3==0){
            arr.push('fizz')
        }else {
            arr.push(i)
        }
        
    }
    return arr
}


console.log(fizzBuzz(10))
console.log(fizzBuzz(15))