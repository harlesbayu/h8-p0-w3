function targetTerdekat(arr) {
    // you can only write your code here!
    var oValue = arr.indexOf('o')
    var jarakTerdekat = arr.length

    if(arr.indexOf('x') === -1 ){
      return 0
    }

    for(var i = 0; i < arr.length; i++){
      if(arr[i] === 'x'){
        jarak = Math.abs(i - oValue)
        if(jarak < jarakTerdekat){
          jarakTerdekat = jarak
        }
      }
    }

    return jarakTerdekat
}

console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['x', 'x', '0', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2