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


let div3or5 = [];

for(i=0;i<7;i++){
    if(Number.isInteger(i/3)||Number.isInteger(i/5)){
        div3or5.push(i);
    }
    else{}
}

let sum = 0;
for (i=0;i<div3or5.length;i++){
    sum=i+sum;
}

console.log(Total.div3or5);
console.log(sum);