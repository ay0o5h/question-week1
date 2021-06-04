function BestProfit(arr) {
    let bestSell,bestBuy;
    let sellday,buyday;
    let weak=['saturday','sunday','monday','tuesday',' wenday' ,'trusday'];
    
    
        


    bestSell =Math.max(...arr);
    bestBuy =Math.min(...arr);
    ind1=arr.indexOf(bestSell);
    ind2=arr.indexOf(bestBuy);
    sellday=weak[ind1]
    buyday=weak[ind2]

   
     if(ind1 < ind2){
        arr.splice(ind1, ind2);
        weak.splice(ind1, ind2);
         bestSell =Math.max(...arr);
         buyday=weak[ind1]
         sellday=weak[ind2]
      

         
        }
 
 
    
  
 
    return  `best day to buy is ${buyday} = ${bestBuy} and best day to sell is ${sellday} = ${bestSell} `
 }
 console.log(BestProfit([150, 146, 142, 143, 145, 144]));
 
 