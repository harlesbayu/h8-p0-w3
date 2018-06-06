function groupAnimals(animals) {
    animals.sort()

    var i = 0;
    var j = animals.length - 1

    var output = [];

    while (animals.length>0) {
        var temporary = []
        var firstLetter = animals[0][0];
        temporary.push(animals[0])
        animals.splice(0, 1)
        
        while (animals.length > 0 && firstLetter === animals[0][0]) {
        temporary.push(animals[0]);
        animals.splice(0, 1);
        }
        
        output.push(temporary);
    }
    return output
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

/*
// Solve Problem
function groupAnimals(animals) {
  // you can only write your code here!
  var groups = []

  for(var i = 0; i < animals.length; i++){
    var isGroup = true
    var group = []

    for(var j = 0; j < groups.length; j++){
      if(groups[j][0][0] === animals[i][0]){
        groups[j].push(animals[i])
        isGroup = false
      }
    }

    if(isGroup){
      group.push(animals[i])
      groups.push(group)
    }
  }

  return groups

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
*/


/*
// Cara yang mudah dalam logikanya
function groupAnimals(animals) {
  
  var firstWord = [];
  for(var i = 0; i < animals.length; i++){
    firstWord.push(animals[i][0])
  }
  firstWord.sort();

  var duplikat = [];
  for(var j = 0; j < firstWord.length; j++){
    if(firstWord[j] !== firstWord[j+1]){
      duplikat.push(firstWord[j])
    }
  }

  var groups = []
  for(var k = 0; k < duplikat.length; k++){
    var group = []
    for(var l = 0; l < animals.length; l++){
      if(animals[l][0] === duplikat[k]){
        group.push(animals[l])
      }
    }
    groups.push(group)
  }
  return groups
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
*/
