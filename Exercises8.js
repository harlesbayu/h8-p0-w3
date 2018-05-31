function pasanganTerbesar(num) {
// you can only write your code here!
    var toString = String(num);
    var result = [];  
    for(var i = 0; i < toString.length - 1; i++) {
        result[i] = toString[i] + toString[i+1];
    }

    var sort = result.sort();
    var bigSequence = Number(sort[sort.length - 1]);
    return bigSequence;

    }

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


/*
// The Second Ways
function pasanganTerbesar(num) {
    var str= String(num);
    var angka;
    var banding=0;

    for(var i = 0; i <str.length; i++) {
        angka= Number (str[i] + str[i+1]);
        if (angka > banding) {
            banding = angka;
        }
    }
return banding;
}
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
*/


/*
// The Third Ways
function pasanganTerbesar(num) {
    var counter = 0;
    var numString = num.toString();
    var arrNum = [];
    while (counter < numString.length){
        arrNum.push(parseInt(numString.substr(counter,2)));
        counter = counter + 1;
    }
    return Math.max(...arrNum);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
*/


/*
// The Fourth Ways
function pasanganTerbesar(num) {

  var ad = '';
  var ar = [];
  var stringn = String(num);
  for (var i = 0; i < stringn.length - 1; i++) {
    // make couple number
    ar.push(stringn[i] + stringn[i + 1]);
  }

  //get the highest number
  return Math.max.apply(null, ar);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
*/

