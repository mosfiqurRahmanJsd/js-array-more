/**
 * LOOPING TECHNIC
 * 1. for loop
 * 2. while loop
 * 3. do while -----> ignore
 * 4. for of ---------> array loop korar joono
 * 5. for in --------------> object loop korar jonno 
 */


const friends = ['Elon', 'Bill', 'Mark', 'Maren']; 
for(const friend of friends) {
    // console.log(friend); 
}

for(let i = 0; i < friends.length; i++) {
    console.log(friends[i]); 
}