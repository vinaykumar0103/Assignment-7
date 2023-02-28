"use strict"


/* 1. Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec...*/

let input = "Icecream";
let output;

if (input.length > 4) {
  output = input.slice(0, 4);
} else {
  output = input;
}

console.log(output);


/* 2. Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy”*/

let Input = "Hii Boy";
let Output = Input.replace(/\s/g, "");

console.log(Output);


/* 3. Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii”*/

let input1 = "Hii Boy";
let words = input1.split(" ");
let output1 = words[1] + " " + words[0];

console.log(output1);


/* 4. Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple”  */

let input2 = "apple";
let output2 = input2.replace(/a/g, "x");

console.log(output2); 



/* 5. What string method can be used to convert string into array ? */

  //(the split() method can be used to convert a string into an array)
let str = "Hello";
let arr = str.split("");
console.log(arr);


/* 6. What string method can be used to check the occurrence of a specified
text in a string? */

//The indexOf() method searches a string for the specified value and returns the index of the first occurrence of the value. If the value is not found, it returns -1.

let myString = "Hello, world!";
let index = myString.indexOf("world");

if (index !== -1) {
  console.log("The text 'world' was found at index " + index);
} else {
  console.log("The text 'world' was not found in the string.");
}

/* 7. How can you break a string to a newline in Javascript ? */

//the special character sequence \n in the string.

let MyString = "This is the first line.\nThis is the second line.";
console.log(MyString);


/* 8. Write a Javascript function to test whether the first character of a string
is lowercase. */

function isFirstCharLowercase(str) {
  return str.charAt(0) === str.charAt(0).toLowerCase();
}
console.log(isFirstCharLowercase("hello")); 
console.log(isFirstCharLowercase("Hello")); 
console.log(isFirstCharLowercase("123")); 
console.log(isFirstCharLowercase("")); 

/* 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ? */

function checkYesInput(input) {
  if (input.toLowerCase() === "yes") {
    return "The user input is 'yes'.";
  } else {
    return "The user input is not 'yes'.";
  }
}
console.log(checkYesInput("yes"));
console.log(checkYesInput("YES"));
console.log(checkYesInput("Yes"));
console.log(checkYesInput("no")); 
console.log(checkYesInput("")); 


/* 10. Given a String S, achieve following tasks

a) Convert the String into upper case.
b) Convert only the first character to uppercase.
c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string */

//a) Convert the String into upper case.

let strg = "hello, world!";
let upperCaseStr = strg.toUpperCase();
console.log(upperCaseStr); 

//b) Convert only the first character to uppercase.
let strg1 = "hello, world!";
let firstCharUpperCase = strg1.charAt(0).toUpperCase() + str.slice(1);
console.log(firstCharUpperCase);

//c) Convert the String into lower case.

let strg2 = "HELLO, WORLD!";
let lowerCaseStr = strg2.toLowerCase();
console.log(lowerCaseStr);

// d) Break the string into two halves and swap them.

let strg4 = "hello, world!";
let halfLength = Math.floor(strg4.length / 2);
let swappedStr = strg4.slice(-halfLength) + strg4.slice(0, -halfLength);
console.log(swappedStr); // Output: "world!hello, "


//e) Count the repeating characters.

let strg5 = "hello, world!";
let charCounts = {};
for (let i = 0; i < strg5.length; i++) {
  let char = strg5.charAt(i);
  charCounts[char] = (charCounts[char] || 0) + 1;
}
console.log(charCounts);

//f) Reverse the string.

let strg6 = "hello, world!";
let reversedStr = strg6.split("").reverse().join("");
console.log(reversedStr); // Output: "!dlrow ,olleh"



