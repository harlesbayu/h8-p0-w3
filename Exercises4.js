var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(param1){
  param1.splice(0, 5, "0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  
  console.log(param1);

  var tanggal = input[3].split('/');
  var bulan = tanggal[1];
  var namaBulan = parseInt(bulan);
  
  switch(namaBulan){
    case 01: bulan = "Januari"; break;
    case 02: bulan = "Februari"; break;
    case 03: bulan = "Maret"; break;
    case 04: bulan = "April"; break;
    case 05: bulan = "Mei"; break;
    case 06: bulan = "Juni"; break;
    case 07: bulan = "Juli"; break;
    case 08: bulan = "Agustus"; break;
    case 09: bulan = "September"; break;
    case 10: bulan = "Oktober"; break;
    case 11: bulan = "November"; break;
    case 12: bulan = "Desember"; break;
  } console.log(bulan);

  tanggal.sort(function(value1, value2){
    return Number(value2) > Number(value1);
  }); console.log(tanggal);

  console.log(tanggal.join("-"));

  console.log(param1[1].slice(0,14));

}

dataHandling2(input);
