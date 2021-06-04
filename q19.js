function findLargestNums(arr){
    return arr.map(i => Math.max(...i))
}

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]))
console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]))