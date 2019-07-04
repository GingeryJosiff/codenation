let myName = "GFJosiff";
console.log(myName);

let favDrink = "coffee";
console.log(favDrink);

console.log("My name is " + myName + " and my favourite drink is " + favDrink);

//different way of doing the same thing below: using "backticks" (not apostrophes) instead of speachmarks
//and using ${} to reference variables

console.log(`My name is ${myName} and my favourite drink is ${favDrink}`);


let myAge = "29";
let favColour = "yellow";

// to start a new line (return) use the character:  \n 

console.log(`Hi, my name is ${myName}, my name is ${myName},\nmy name is ${myName},\nand my favourite colour and drink are ${favColour} and ${favDrink}`);


let space1="X";
let space2="X";
let space3="X";
let space4="X";
let space5="X";
let space6=" ";
let space7="O";
let space8=" ";
let space9=" ";


console.log(`   |   |   `)
console.log(` ${space1} | ${space2} | ${space3} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space4} | ${space5} | ${space6} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space7} | ${space8} | ${space9} `)
console.log("   |   |   ")

console.log("\n\n\n")


//And the same in one line
console.log(`   |   |   \n ${space1} | ${space2} | ${space3} \n   |   |   \n-----------\n   |   |   \n ${space4} | ${space5} | ${space6} \n   |   |   \n-----------\n   |   |   \n ${space7} | ${space8} | ${space9} \n   |   |   `)


if(space1=="X"&&space1==space2&&space1==space3){
    console.log("Congratulations Xs, you have won!");
}
else if(space1=="O"&&space1==space2&&space1==space3){
    console.log("Congratulations Os, you have won!");
}
else{console.log("loser")};

