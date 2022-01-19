/**     Product of Nums
Write a function that finds the product of an array of numbers:

product([2, 3, 4])   // 24
*/

function product(arr){
    // base case
    if (arr.length === 0){
        return 1;
    }
    // normal case
    
    return arr[0] * product(arr.slice(1));
}
let a = [2, 3, 4];
// console.log(product(a));