function balikString(arr){
  var reverseStr = ''
  for(var i = arr[0].length-1; i >= 0; i--){
    reverseStr = reverseStr + arr[0][i]
  }
  return reverseStr
}

console.log(balikString(['hello world!']))


/*
// Menggunakan filter
function balikString(str){
  var str2 = ""
  str.split('').filter(function(char){
    return str2 = char + str2;
  })
  return str2
}
  
console.log(balikString("hello world!"));
*/


/*
// Menggunakan map
function balikString(str){
    var reverse = ''
    str.split('').map(function(a){
     return reverse = a + reverse;
    });
    return reverse
}
  
console.log(balikString("hello world!"));
*/


/*
// Menggunakan reduce
function balikString(str){
    return str.split("").reduce(function(revString,char){
      return char + revString;
    }, "");
}
  
console.log(balikString("hello world!"));
*/


/*
// Menggunakan for..each
function balikString(str){
    var revString=""
    str.split("").forEach(function(char){
      revString = char + revString;
    });
    return revString;
}
  
console.log(balikString("hello world!"));
*/


/*
// Menggunakan pop
function balikString(str){
    var letters= str.split("");//this is the stack
    var rword ="";
    for(var i=0;i<str.length;i++){
        rword += letters.pop();
    }  
    
   return rword;
}
  
console.log(balikString("hello world!"));
*/


/*
// Menggunakan for..of
function balikString(str){

    var reverse ="";
    for(var char of str){
        reverse = char + reverse;
    }
    return reverse;
}
  
console.log(balikString("hello world!"));
/*


/*
// Menggunakan for..in
function balikString(str){

    var reverse ="";
    for(var char in str){
        reverse = str[char] + reverse;
    }
    return reverse;
}
  
console.log(balikString("hello world!"));
/*


/*
// Menggunakan perulangan for
function balikString(kalimat){
  
  var huruf="";
  for (var i=kalimat.length - 1; i>=0; i--) {
    huruf += kalimat[i];
  }
  return huruf;
}

var print = balikString("hello world!");
console.log(print);
*/


/*
function balikString(kalimat){
  var huruf="";
  for (var i = 0; i < kalimat.length; i++) {
    huruf = kalimat[i] + huruf; // ketika dibalik, makan akan menghasilkan reverse
  }
  return huruf;
}

var print = balikString("hello world!");
console.log(print);
*/


/*
// Menggunakan perulangan while
function balikString2(kalimat2) {
  var a = kalimat2.length - 1;
  var huruf2 = "";
  while( a >= 0) { 
    huruf2 += kalimat2[a];
    a--;
  }
  return huruf2;
}

var print2 = balikString2("hello world!");
console.log(print2);
*/


/*
// Menggunakan perulangan do...while
function balikString3(kalimat3){
  var k = kalimat3.length - 1;
  huruf3=""
  do {
    huruf3 += kalimat3[k];
    k--;
  }while(k >= 0)
  return huruf3;
}

var print3 = balikString3("hello world!");
console.log(print3);
*/


/*
// Cara mudah
function balikString(str){
  var str2 = str.split('').reverse().join('');
  return str2
}

balikString("hello world!");
*/