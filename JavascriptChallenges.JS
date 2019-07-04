let paragraph = "The quick Brown Fox jumps over the lazy Brown Dog";
console.log(paragraph);

/*
JavaScript provides several methods that search strings: indexOf, lastIndexOf, search,
and the regular expression method test. These basic methods tell you whether a match has been found.
The first three return the location in the string of the match, or -1 if no match is found.
The test method returns true or false.
*/
console.log("\nsearch():");
console.log(paragraph.search("B"));

/*
To search a string using the indexOf method, you invoke it on the string you are searching,
and pass the substring you are searching for.
The indexOf method returns an integer indicating the location of the first found instance
of the substring in the string, or -1 if it is not found.
*/
console.log("\nindexOf():");
console.log(paragraph.indexOf("B"));
//You can pass an optional second argument to indexOf to specify the index location at which to begin the search
console.log("indexOf with defined search startpoint in string???:");
console.log(paragraph.indexOf("B",11));
// DON"T KNOW WHY RETURNING 40???
console.log("\nindexOf searches from left to right and lastIndexOf searches from right to left");
console.log("lastIndexOf():")
console.log(paragraph.lastIndexOf("B"));

console.log("\n\nSlice():");

let array = [`0treble`, `1bass`, `2high hat`, `3snare`, `4kick drum`, `5sin wave`];
console.log(array.slice(2,3))





//1. ifElseChallenge Password
console.log("\n\nQuestion 1)")
let password = "xxxxxxxxxx"
console.log(password.length);

if(password.length>8){
    console.log("password accepted")
}
else{
    Console.log("*Password must contain at least 8 characters.")
};    


//3. Is number divisible by 3 or 5?
console.log("\n\nQuestion 2 & 3)")
let num = "5151515";
/*
if((num/3))isInteger||(num/5)isInteger){
    console.log("This number is divisble by 3 or 5"):
}
else{
    console.log("This number isn't divisible byt 3 or 5"):
}
*/

if(Number.isInteger(num/3)){
    console.log("This number is divisble by 3 or 5");
}
else if(Number.isInteger(num/5)){
    console.log("This number is divisble by 3 or 5");
}
else{
    console.log("This number isn't divisible byt 3 or 5");
};


if(Number.isInteger(num/3) && Number.isInteger(num/5)){
    console.log("FizzBuzz");
}
else if(Number.isInteger(num/3)){
    console.log("Fizz");
}
else if(Number.isInteger(num/5)){
    console.log("Buzz");
}
else {
    console.log("This number isn't divisible by 3 or 5");
}





//4. Pallindrome question:
console.log("\n\nQuestion 4)")
let original=num.split("").join()

let reversed = num.split("").reverse().join();

//What is split() doing:
let numSplit=num.split("")
console.log(numSplit)


if(original===reversed){
    console.log("Palindrome");
}
else{
    console.log("Fucked it");
}



//5. Time question
console.log("\n\nQuestion 5)")
let time = "15"
let placeOfWork = "9"
let townOfHome = "17"
let commute = "1"

if(time>=placeOfWork && time<=townOfHome){
    console.log("At work");
}
else if(time>=placeOfWork-commute && time<placeOfWork|| time>townOfHome&&time<=townOfHome+commute){
    console.log("commuting")
}
else {console.log("At Home");
}




//6. Vowel question
console.log("\n\nQuestion 6)")
let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowel = ['a','e','i','o','u']
let array1 = []

for(i=0;i<vowel.length);i++){
    array1.push(voewl.lastIndexOf(vowel[i]));
}
console.log()




//7. FirstLetter=LastLetter Question
console.log("\n\nQuestion 7)")
let word = "dsfwsgtdhgsdf`cd"

if(word.slice(0,1)===word.slice(word.length-1)){
    console.log("TRUE");
}
else {console.log("FALSE");
}




//Question 8
console.log("\n\nQuestion 8)")

let num1 = "1"
let num2 = "2"

if(Number.isInteger(num1+num2)){
    console.log(num1+num2);
}
else{console.log(num1*num2)}