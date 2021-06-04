function sortArray(arr) {
    var temp = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
        return arr;
  }
  
 console.log(sortArray([2, -5, 1, 4, 7, 8]) )
 
 console.log(sortArray([23, 15, 34, 17, -28]) )
  
 console.log (sortArray([38, 57, 45, 18, 47, 39]) )