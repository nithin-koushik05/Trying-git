// Guess a number below 10
let actualNum = 5;
let userNum = prompt("Enter the number");
while(userNum>10){
    userNum = prompt("Enter a valid number");
}
while(userNum != actualNum){
     userNum = prompt("Guess again!");
}
console.log("Aight!");