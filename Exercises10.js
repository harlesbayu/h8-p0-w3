function perkalianUnik(arr) {
// you can only write your code here!
  var hasil = [];
  for(var i = 0; i < arr.length; i++){
      var times = 1;
      for(var j = 0; j < arr.length; j++){
          if(i !== j){
              times *= arr[j];
          }
      }
      hasil.push(times);
  }
  return hasil;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

/*
// Cara sendiri
function perkalianUnik(arr) {
  // you can only write your code here!
  var result = [];
  for(var i = 0; i < arr.length; i++){
    var tampung = 1;
    for(var j = 0; j < arr.length; j++) {
      if(arr[i] !== arr[j]){
        tampung *= arr[j];
      }
    }result.push(tampung);
  }return result;

}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
// console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
// console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
// console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
// console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
*/
