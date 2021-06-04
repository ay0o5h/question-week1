function HowManyLetters(str){
    var strJson={};
    for (i = 0; i < str.length; i++) {
              if(strJson[str[i]]){
                strJson[str[i]]++;
              }
              else {
                strJson[str[i]]=1
              }
    }
    return strJson
  }
 console.log( HowManyLetters('kkssffoos'))