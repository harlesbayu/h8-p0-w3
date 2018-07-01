function hitungJumlahKata(kalimat) {
// you can only write your code here!
    var jumlah = 1;

    for(var i = 0; i < kalimat.length; i++) {
        if(kalimat[i] === ' '){
            jumlah++;
        }
    }
    return jumlah;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5


/*
//The Third Ways
function hitungJumlahKata(kalimat) {
    return kalimat.split(" ").length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
*/s