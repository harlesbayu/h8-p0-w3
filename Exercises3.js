var kolom = ['Nomor ID : ', 'Nama Lengkap : ', 'TTL : ', 'Hobi : '];
var input = [
              ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
              ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
              ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
              ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ] 
function dataHandling (arr){
    var i=0;

    while(i < input.length) {
        console.log(kolom[0] + input[i][0]);
        console.log(kolom[1] + input[i][1]);
        console.log(kolom[2] + input[i][2] +' '+ input[i][3]);
        console.log(kolom[3] + input[i][4]);
        console.log('\n');
        i++;
    }
   
}

dataHandling();


/*
// The second ways
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]


function dataHandling (arr) {
  var store = "";
  for (var i = 0; i <= arr.length-1; i++) {
      store = store + 
      "Nomor ID     : " + arr[i][0] + "\n" +
      "Nama Lengkap : " + arr[i][1] + "\n" +
      "TTL          : " + arr[i][2] + ", " + arr[i][3] + "\n" +
      "Hoby         : " + arr[i][4] + "\n\n"; 
  }
  return store
}

console.log(dataHandling(input))
*/