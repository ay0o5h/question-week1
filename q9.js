numToEng = (number) => {
    let underTen=[   'zero', 'one', 'two', 'three',  'four','five','six','seven','eight','nine',]
    let underTwenty = ['zero','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',];
    let tens = ['zero','ten','twenty', 'thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    if (number === 0) return  'zero';
    else if(number < 9) return underTen[number];
    else if (number < 20) { 
        arr=number.toString().split('')
        num= arr.map(x => parseInt(x));
      return underTwenty[arr[1]];
    } else if (number < 100) {
        arr=number.toString().split('')
        num= arr.map(x => parseInt(x));
        if(num[1]==0){
            n1=number / 10
            n2=n1%1000;
            return tens[n2]
        }else {
            return tens[num[0]]+' '+ underTen[num[1]]
        }
          
    
    } else if (number < 1000) {
        arr=number.toString().split('')
        num= arr.map(x => parseInt(x));
        if(num[1]==0 && num[2]==0){
            n1=number / 100
            return `${underTen[n1]}  hundred`
        }else if( num[2]==0){
            return `${underTen[n1]} hundred and  ${tens[num[1]]}`
        }else if( num[1]==0){
            return `${underTen[n1]}  hundred and  ${underTen[num[0]]}`

        }else {
            return `${underTen[n1]}  hundred and   ${tens[num[1]]}  ${underTen[num[2]]}`

        }
    }
  };
  console.log(numToEng(0))
  console.log(numToEng(18))
  console.log(numToEng(90))
  console.log(numToEng(99))
  console.log(numToEng(126))
  console.log(numToEng(909) )