function squareDigits(n){
    let array = n.toString().split("");
    num= array.map(x => parseInt(x));
    let arr=[]
    for(let i=0; i<num.length; i++){
        num1=Math.pow(num[i], 2);
        arr.push(num1);
    }

   return singleNumber = Number(arr.join(''));
}




console.log(squareDigits(9119))
 
console.log(squareDigits(2483))
 
console.log(squareDigits(3212))