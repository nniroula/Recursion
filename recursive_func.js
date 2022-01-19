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

/* 
Longest Word
Given a list of words, return the length of the longest:

longest(["hello", "hi", "hola"])  // 5
*/

function longest(arr){
    if (arr.length === 0){
        return 0;
    }
    return Math.max(arr[0].length, longest(arr.slice(1)));
}

// console.log(longest(["hello", "hi", "hola"])); 
// console.log(longest([]));

/*
Every Other Character
Write a function that returns a string of every other character:

everyOther("hello")  // "hlo"
*/

function everyOther(str){
    let n = 0;
    if(str.length === 0){
        return;
    }
    if (str.length === 1){
        return str[0]; 
    }
    if(str.length === 2){
        return str[0];
    }
  
    // return str[0] + everyOther(str.slice(2, 3));
    return str[0] + everyOther(str.slice(n + 2));
}
// console.log(everyOther("hello") );

/*
Is Palindrome?  // Palindrome means if it reads the same from the beginning as well as from the end of the word
Write a function that returns true/false depending on whether passed-in string is a palindrome:

isPalindrome("tacocat")  // true
isPalindrome("tacodog")  // false

*/

function isPalindrome(str){
    // base case
    if(str.lenght === 0 || str.length === 1){
        return true
    }
    return (str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1)));

}
// console.log(isPalindrome("tacocat"));
// console.log(isPalindrome("tacodog"));

/*
Find Index
Given an array and a string, return the index of that string in the array (or -1 if not present):

let animals = ["duck", "cat", "pony"];

findIndex(animals, "cat");  // 1
findIndex(animals, "porcupine");   // -1

*/

function findIndex(arr, str, count = 0) {  // count stays as a default parameter
    // Base case
	if (arr.length < count){ 
        return -1;
    }
    // normal case
	if (arr[count] === str){
        return count; 
    }
	return findIndex(arr, str, count + 1);
}

/*
Reverse String
Return a copy of a string, reversed:

revString("porcupine") // 'enipucrop'
*/
function revString(str){
    // Base case
    if(str.length === 0){
        return;
    } 
    if(str.length === 1){
        return str;
    }
    // normal case
    let temp = str[str.length - 1];
    str[str.length - 1] = str[0];
    str[0] = temp;
    return str[str.length - 1] + revString(str.slice(1, str.length - 1)) + str[0];
}
// console.log(revString("porcupine"));