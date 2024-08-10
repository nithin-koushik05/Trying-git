function isPalindrome(str) {
   const len = str.length;
    for(let i=0;i<len/2;i++){
        if (str[i] !== str[len - 1 - i]){
            return 'It is not a palindrome';
        }
    }
    return `${str} is a palindrome string`;    // used template literal

}

const str = prompt("Enter a string");
const val = isPalindrome(str);
console.log(val);
 
// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);