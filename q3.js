function HowManyPairs(shoes) {
   
    let count = 0, l=0;r=0;
    let arr=shoes.split("");
    for(let i=0;i<arr.length;i++) {
        if( arr[i] === 'R'){
            r++;
        }else {
            l++;
        }
        if (r===l){
            count++;
            r=0,l=0;
        }
    }
   return count
}
console.log(HowManyPairs("RLRLRRLL"));
console.log(HowManyPairs("RRLLRRRLLR"))
console.log(HowManyPairs("RRLRLRRLLRRLLLRR"))
