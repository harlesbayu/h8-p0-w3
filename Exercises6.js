function angkaPalindrome(num) {
  num++
  var i = num
  
  while(i < num * num){
    var balik = String(i).split('');

    var tmp = ''
    var j = balik.length - 1;
    while(j >= 0){
      tmp += balik[j]
      j--;
    }

    if (i === (Number(tmp))) {
      return i
    }
    i++
  }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


/*
// The second ways
function angkaPalindrome(num) {
  num++
  var i = num
  while(i < num*num){
    var str = i.toString().split('').reverse().join('');
    if (i == str){
    return i; 
    }
    i++
  }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
*/


/*
// The third ways
function angkaPalindrome(num) {
  // you can only write your code here!
  for(var i = 0; i < num; i++){
    num++
    var first = String(num)

    var store = ''
    for(var j = first.length-1; j >= 0; j--){
      store += first[j]
    }
    if(first === store){
      return num
    } 
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
//Agar mudag dimengerti liat source bawah, karena hampir sama dengan code ini
 */


/*
function angkaPalindrome(num) {
  // you can only write your code here!
  num++
  for(var i = num; i < num*num; i++){
    var first = String(i)

    var store = ''
    for(var j = first.length-1; j >= 0; j--){
      store += first[j]
    }
    if(first === store){
      return i
    } 
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
*/
