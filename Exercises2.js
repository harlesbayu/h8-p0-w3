// Menggunakan perulangan FOR

function balikString(kalimat){
  
  huruf="";
  for (var i=kalimat.length - 1; i>=0; i--) {
    huruf += kalimat[i];
  }
  return huruf;
}

var print = balikString("hello world!");
console.log(print);

console.log("");
console.log("=====================");
console.log("");

// Menggunakan perulangan While

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

console.log("");
console.log("=====================");
console.log("");

// Menggunakan perulangan Do While

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