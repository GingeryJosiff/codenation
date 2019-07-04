/*
if(something){do this}
else{do this};

if(something){do this}
ifelse(something else){do this}
ifelse(something else){do this}
else{do this}
*/

//'else; is the closing statment to an 'if' function with as many 'ifelse' statements inbetween


let music = "classical";

if(music="classical"){
    console.log("Not this classical stuff again");
}
else if(music="none"){
    console.log("get the tunes blarin' lad!");
}
else if(music = "house"){
    console.log("it's all about house music");
};

console.log("\n\nBoolean: True/false");




if (1!="1"){
    console.log.og(true);
}
else {
    console.log(false);
}




// Age variable
console.log("\n\nAgeCheck:\n")

let age = "17";

console.log(`Shopper: "Hi, I'm ${age}, can I have 20 pints and 5 packets of fags please?"`)

if(age>17){
    console.log(`Server:  "Yes I can serve you"`);
}
else{
    console.log(`Server:  "You aren't old enough"`);
}




// With Country
console.log("\n...with counrty.")

let counrty = "UK"
console.log(`Shopper: "Hi, I'm ${age}, can I have 20 pints and 5 packets of fags please?"`)

if(age>17 && country == "UK"){
    console.log(`Server:  "Yes I can serve you"`);
}
else{
    console.log(`Server:  "Nah mate"`);
}


let day = "saturday";

if(day = "saturday"||"sunday"){
    console.log("It's weekend");
}
else {
    console.log("When's weekend?");
}