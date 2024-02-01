/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const clearString = str.replace(/\s|[^\w\s]/g ,"").toLowerCase().trim()
  if(clearString === clearString.split("").reverse().join(""))
  {
    return true
  }
  return false
}
isPalindrome("Able, was I ere I saw Elba!")
module.exports = isPalindrome;
