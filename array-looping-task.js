

// task 1
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reverseColors = [];
for (let i = colors.length - 1; i >= 0; i--) {
    reverseColors.push(colors[i]);
}

// console.log(reverseColors); 







// task 2
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = []
// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     if (number % 2 === 0) {
//         evenNumbers.push(number); 
//     }
// }
// console.log(evenNumbers); 









// task 3
// const catName = ['Tom', 'Tim', 'Tin', 'Tik', 'Tok']; 
// let cats = ''; 
// for(let i = 0; i < catName.length; i++) {
//     cats = cats.concat(catName[i]); 
// }
// console.log(cats); 





// task 4
const statement = 'I am a hard working person'; 
const splitStatement = statement.split(' '); 

let statementNew = []; 
for(let i = 0; i< splitStatement.length; i++) {
    statementNew.unshift(splitStatement[i]); 
}
// console.log(statementNew); 








// task 5
let original = [1, 2, 3]; 
let copy = [...original]
copy[0] = 99; 
// console.log('Original', original, 'Copy', copy); 





// task 6
// const students = [ { name: "John", marks: 85 }, { name: "Alice", marks: 90 }]; 

// for(const student of students) {
//     console.log(student.name, 'Score' , student.marks); 
// }






// task 7
const array2d= [ [1, 2],   [3, 4],   [5, 6] ]; 
array2d[1][0] = 99; 
console.log(array2d); 






