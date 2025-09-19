const myString = "I am a Good Boy. Write i am now a Web developer"; 
let words = myString.split(' '); 

for(let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
    
}

let bigger = words.join(' '); 

console.log(bigger); 