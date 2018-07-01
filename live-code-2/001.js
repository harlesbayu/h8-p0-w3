/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases

RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.

*/

/*
Pseudocode

Function numberLtter(str)
STORE 'tampung' with string value
STORE 'x' with any value
FOR 'x' EQUALS TO 0; x LESS THEN str.length; x++
  IF (str[x] == 1)
    tampung = tampung + 'i'
  ELSE IF (str[x] == 4)
    tampung = tampung + 'a'
  ELSE IF (str[x] == 3)
    tampung = tampung + 'e'
  ELSE IF (str[x] == 7)
    tampung = tampung + 'u'
  ELSE IF (str[x] == 0)
    tampung = tampung + 'o'
  ELSE
    tampung = tampung + str[x]
RETURN tampung

*/

function numberLetters (str) {
  // Code disini
  var tampung = '';
  for(var x = 0; x < str.length; x++){
    if (str[x] == 1){
      tampung += 'i'; 
    }
    else if(str[x] == 4){
      tampung += 'a';
    }
    else if(str[x] == 3){
      tampung += 'e';
    }
    else if(str[x] == 7){
      tampung += 'u';
    }
    else if(str[x] == 0){
      tampung += 'o';
    }
    else {
    tampung += str[x];
    }
  }
  return tampung;
}

// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //


/*
// The second ways
function numberLetters (str) {
  // Code disini
  var newStr = ''
  for(var i = 0; i < str.length; i++){

    switch(Number(str[i])){
      case 1: newStr += 'i'; break;
      case 3: newStr += 'e'; break;
      case 4: newStr += 'a'; break;
      case 7: newStr += 'u'; break;
      case 0: newStr += 'o'; break;
      default: newStr += str[i]
    }
  }
  return newStr
}

// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //
*/
