function set(arr){
     arr1 =arr.sort(function(a, b){return a - b});
        var seen = {};
        return arr1.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }



console.log(set([1, 3, 3, 5, 5]) )
console.log(set([4, 4, 4, 4]))
console.log(set([5, 7, 8, 9, 10, 15]) )
console.log(set([3, 3, 3, 2, 1]) )