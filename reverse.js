const numbers = [1, 2, 3, 4, 5, 6, 7]; 


let reverseNumber = []; 
for(const number of numbers) {
    reverseNumber.unshift(number); 
}

// console.log(reverseNumber); 


for(let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]); 
}