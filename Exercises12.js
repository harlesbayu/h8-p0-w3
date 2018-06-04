function tentukanDeretGeometri(arr) {
    for(var i=0; i < arr.length; i++){
        var hasil = arr[1] / arr[0]
        if( hasil === arr[arr.length-1] / arr[arr.length-2]){
            return true;
        } else{
            return false;
        }
    }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

/*
// Cara yang paling benar
function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var pembanding = arr[1] / arr[0];
  var point = true;

  for(var i = 1; i < arr.length; i++){
    if(pembanding !== (arr[i+1] / arr[i])){
      point = false;
    }
    return point;
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
*/