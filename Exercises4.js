function dataHandling2(input){
  input.splice(0 ,5 , "0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
  console.log(input)

  var date = input[3].split('/')
  var month = Number(date[1][1])

  switch(month){
    case 1: month = 'January'; break;
    case 2: month = 'February'; break;
    case 3: month = 'March'; break;
    case 4: month = 'April'; break;
    case 5: month = 'May'; break;
    case 6: month = 'June'; break;
    case 7: month = 'July'; break;
    case 8: month = 'August'; break;
    case 9: month = 'September'; break;
    case 10: month = 'October'; break;
    case 11: month = 'November'; break;
    case 12: month = 'December'; break;
  }
  console.log(month)

  var sorting = date.sort(function(a,b){
    return b-a
  })
  console.log(sorting)

  var dividing = date.join('-')
  console.log(dividing)

  var name = input[1].slice(0,15)
  console.log(name)

}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
console.log(dataHandling2(input))