

function isPalindrome(word) {

  const lowerCaseWord = word.toLowerCase();

  const cleanWord = lowerCaseWord.replace(/[^a-z]/g, '');

  const reversedWord = cleanWord.split('').reverse().join('');
  return cleanWord === reversedWord;
}

// Function to test and display the result
function testIsPalindrome(word) {
  if (isPalindrome(word)) {
    console.log(`"${word}" is a palindrome.`);
  } else {
    console.log(`"${word}" is not a palindrome.`);
  }
}

if (require.main === module) {
  testIsPalindrome("racecar");
  testIsPalindrome("robot");
  testIsPalindrome("A man, a plan, a canal, Panama");
  testIsPalindrome("Was it a car or a cat I saw?");
  testIsPalindrome("No lemon, no melon");
}

module.exports = isPalindrome;

