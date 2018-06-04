function tentukanDeretAritmatika(arr) {
  for (var i =0; i < arr.length; i++){
      var hasil = arr[1] - arr[0];
      if (hasil === arr[arr.length-1] - arr[arr.length-2]){
        return true;
    } else{
        return false;
    }
  }

}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

/*
// Cara yang benar
function tentukanDeretAritmatika(arr) {
  var beda = arr[1]-arr[0];
  var poin = true;

  for (var i = 0; i < arr.length - 1; i++) {
    
    if(beda !== (arr[i+1]- arr[i])) {
      poin = false;
    }

  }
  return poin;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24, 26])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54, 58])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
*/