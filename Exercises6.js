function angkaPalindrome(num) {

  num+=1;
  var i = num;
  
  while(i < num * num){
    var balik = String(i).split('');
    
    var tmp = '';
    var y = balik.length - 1;
    while(y >= 0){
      tmp += balik[y];
      y--;
    }

    if (i === (Number(tmp))) {
      return i;
    }
    i++;
  }

}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

/*
// The Second Ways
function angkaPalindrome(num) {
  if (num === 8){
    num += +1;
  }
  var i = num;
  while(i < 2000){
     var str = i.toString();
     str = str.split('');
     str = str.reverse();
     str = str.join('');
   
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
// The Third Ways
function angkaPalindrome(num) {

  // add num by 1 for making next number
  num = num + 1;

  for (var i = num; i < num * num; i++) {
    var balik = String(i).split('');
    var tmp = '';

    // making num to be Reverse using:  FOR Loop
    for (var y = balik.length - 1; y >= 0; y--) {
      tmp += balik[y];
    }

    if (i === (Number(tmp))) { // compare num with num-reverse
      return i;
    }

  }

}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(802220)); // 803308
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(20111)); // 20202
*/


/*
// The Fourth Ways
function angkaPalindrome(num) {
    num = num + 1;
    if (num > 0 && num < 10) {
        return num;
    }
    while (!palindrome(num.toString())) {
        num = num + 1;
    }
    return num;

    function palindrome(kata) {
        var balikKata = '';
        var i = kata.length - 1;
        while (i >= 0) {
            balikKata = balikKata + kata[i];
            i = i - 1;
        }
        return kata === balikKata;
    }
}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
*/


/*
// The Fourth Ways

function angkaPalindrome(num) {
    num += 1;
    var found = false;
    while(found === false){
        string = num.toString();
        allgood = true;
        for(x=0;x<Math.floor(string.length/2);x++){
          if(string[x] != string[string.length-1-x]){
                allgood = false;
                break;
          }
      }
      if(allgood === true){
          found = true;
      }else{
          num += 1;
      }
    }
    return(num);
  }
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
*/


/*
// The Fifth Ways
function angkaPalindrome(num) {

    for (var i = 0; i < num; i++) {
        num++;
       
        // jadikan angka sebagai string
        var angkaStr = String(num);

        var tampungString = '';
        for (var j = (angkaStr.length - 1); j >= 0; j--){
          tampungString = tampungString + angkaStr[j];
        }

        // jika angka dalam string samadengan string yang ditampung
        if(angkaStr === tampungString) {
          return num;
        }
      }
  }
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(112)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
 */
