/*
for(i=0;i<10;i++){
    console.log(i);
}




for(i=9;i>=0;i--){
    console.log(i);
}
*/



/*
for(i=0;i<6;i++){
    console.log(Math.floor(Math.random()*50));
}
*/




/*
let cards= ["Diamond","Spade", "Club", "Heart"];
let currentCard="";

while(currentCard!="Spade"){
    console.log(currentCard);
    currentCard=cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);
*/


/*
let films = [
    "Pulp Fiction",
    "Toy Story",
    "School for scoundrels",
];

console.log(films);

films.push("Rambo");
console.log(films);

films.unshift("Alien");
console.log(films+"\n\n");


for(filmIndex=0;filmIndex<films.length;filmIndex++){
    console.log(films[filmIndex]);
}

// *** Next bit ***

const filmCheck=()=>{
if(films[2]=="Ghostbusters"){
    console.log("Yay, it's Ghostbusters");
}
    else {console.log("Boo, we want Ghostbusters");
}
}

console.log(filmCheck());

films.splice(2,0,"Ghostbusters");
console.log(films)
console.log(filmCheck());
*/



/*
//Challenge 1)
console.log("\n\nChallenge 1)");


let numbersBelow = 1000;
let div3or5 = [];

for(i=0;i<numbersBelow;i++){
    if(Number.isInteger(i/3)||Number.isInteger(i/5)){
        div3or5.push(i);
    }
    else{}
}

let sum = 0;
for (i=0;i<div3or5.length;i++){
    sum+=div3or5[i];
}

console.log(`Sum of numbers divisible by 3 or 5 below ${numbersBelow}:\n=${sum}`);
*/

let string = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
console.log("\n\nLast index of 'hi' :" + string.lastIndexOf("hi"));
console.log("=" +string.substring(77,79));

console.log("\nFirst index of 'hi' :" + string.indexOf("hi"));

console.log("=" + string.substring(25,27));

let strArray = string.split("").join()
for(i=0;i<string.length;i++){
    console.log(string.substring(i,i+1));
}

let position = 0

for (i=0;i>string.length;i++){
    sting.slice(string.indexOf("hi"));
    position++;
    
}
console.log(position);