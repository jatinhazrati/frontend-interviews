/*
Q1 - Palindrome Number

An integer is palindrome when it reads the same forward and backward

I/P: x = 121  O/P: true
I/P: x = 10   O/P: false

*/

const isPalindromBruteForce = (number) => {
  if (number < 0) return false;
  return number === Number(number.toString().split("").reverse().join(""));
};

const isPalindromeWithoutInternalMethods = (number) => {
  let reversedNumber = 0;
  let copy = number;

  while (copy > 0) {
    let digit = copy % 10;
    reversedNumber = reversedNumber * 10 + digit;
    copy = Math.floor(copy / 10);
  }

  return reversedNumber === number;
};

console.log(isPalindromeWithoutInternalMethods(121));
console.log(isPalindromeWithoutInternalMethods(10));
