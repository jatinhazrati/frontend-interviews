/*
Q3 - Valid Anagram 

An anagram is word or phrase formed by rearranging the letters of different word or phrase using all the original letters exactly once

I/P: (s = "anagram"), (t = "nagaram")    O/P: true
I/P: (s = "rat"), (t = "car")            O/P: false
*/

//WAY 1 - Sort Numbers
const validAnagram1 = (s, t) => {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

const validAnagram2 = (s, t) => {};

console.log(validAnagram1("anagram", "nagaram"));
