// function numberSplit(n) {
//     if (n%2==0){
//         return [n/2 , n/2]
//     }
//     else {
//        let  leftOne=Math.floor(n/2);
//         let rigthOne= Math.ceil(n/2);
//         return [leftOne , rigthOne]
//     }
//  }
 function  numberSplit (n){
    let arr = [];
    let leftNum = Math.floor(n / 2);
    let rightNum = n - leftNum;
   
    arr.push(leftNum, rightNum);
    return arr;
  
  };
 
 
 console.log(numberSplit(4) );
  
 console.log(numberSplit(10)) 
  
 console.log(numberSplit(11) )
  
 console.log(numberSplit(-9)) 