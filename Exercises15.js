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