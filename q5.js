function BinarySearch(element,arr) {
  let low = 0;
  let higth = arr.length - 1;  
  while(low <= higth) {
    let mid = Math.floor((low + higth) / 2); 
       if(element === arr[mid]) {
      return mid;
    }  else   if(element > arr[mid]) {
  
      low = mid + 1;
    }    else {
  
      higth = mid - 1;
    }   
  }
  return -1
  }


console.log(BinarySearch(5, [4, 2, 5, 2, 1, 4, 6, 7, 9]));
console.log(BinarySearch(1, [4, 2, 5, 2, 1, 5, 6, 1, 9]));
console.log(BinarySearch(2, [4, 2, 5, 2, 1, 5, 6, 1]));
