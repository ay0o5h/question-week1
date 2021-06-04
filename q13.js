function arrayOfMultiples(num,arrlength){
    
    let arr=[];
    for(let i=1; i <= arrlength; i++){
         arr[i]=num*i;      
    }
    return arr;
}



console .log(arrayOfMultiples(7, 5))
 
console .log( arrayOfMultiples(12, 10))
 
console .log(arrayOfMultiples(17, 6))