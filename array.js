const persons = ['akib', 'nokib', 'nabil', 'nakib', 'dakib']; 

const shortedPerson = persons.sort(); 
// console.log(shortedPerson); 

const numbers = [1, 4, 5, 7, 9, 2, 6, 12, 38, 49]; 
const sortNumber = numbers.sort(function(a, b) {return a - b})
const rev = numbers.sort(function(a, b) {return b - a})
console.log(rev); 