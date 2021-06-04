function testJackpot(arr){
    for(var i=0; i<arr.length; i++){
        if (arr[i] === arr[i+1]){
            return true;
        }else {
            return false;
        }
    }
}



console.log(testJackpot(["@", "@", "@", "@"]))

console.log(testJackpot(["abc", "abc", "abc", "abc"]))

console.log( testJackpot(["SS", "SS", "SS", "SS"]))

console.log(testJackpot(["&&", "&", "&&&", "&&&&"]))

console.log( testJackpot(["SS", "SS", "SS", "Ss"]))