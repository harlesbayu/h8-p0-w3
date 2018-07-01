function palindrome(word) {
  // you can only write your code here!
  var reverseWord = "";
  for(var i=(word.length-1); i>=0; i--){
    reverseWord += word[i];
  }
  if(word == reverseWord){
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false


/*
//The second ways

function palindrome(kata) {
  var hasil = '';
  for (var i = kata.length -1; i >= 0; i--){
  hasil += kata[i];
  
  }
  return hasil === kata; 
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
*/


/*
//The third ways
function palindrome(kata) {
  // you can only write your code here!
  var secondWord = kata.split('').reverse().join('')
  return kata === secondWord
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
*/