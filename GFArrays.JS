/*let favSongs=[
    "4x4x4","crave you","kemistry"
];
console.log(favSongs[0]);

favSongs[2]="lucky star";
//replaces specified item number in the array

console.log(favSongs);

console.log(favSongs.length);

favSongs.push("millionaire");
//adds item to end of array

console.log(favSongs);

favSongs.pop()
//removes last item from array

console.log(favSongs)



let favSites = ["facebook","whatsapp","google","askjeeves"];
console.log(favSites);
favSites.push("CodeNation","wwwebsite");
console.log(favSites);
favSites.pop();
console.log(favSites);

favSites.shift();
//Removes first item from array
console.log(favSites);

favSites.unshift("google.maps");
//Add item to start of array
console.log(favSites);


console.log(favSites.slice(2));
//slice will split an array from (and including) the specified item

console.log(favSites.slice(2,3));
//idetifying 2 integers will include the first and exclude the last

console.log(favSites);


favSites.splice(0,0,"splice2");
//splice changes the original array. starting at the first number, removing the second number and adding any following items

console.log(favSites);





let arrayCurly = new Array(40);
let arraySquare = [40];

console.log(arrayCurly);
console.log(arraySquare);


let Map1 = new Map([[1,2],[2,3],[3,4]]);
console.log("Map1:");
console.log(Map1);

let Map2 = new Map([["Firstname","Joseph"],["Surname","Platt"],["Website","Codenation"]]);

console.log("\nMap2:");
console.log(Map2);

let Map3 = new Map(
    [[["FirstName","Surname"],["Joseph","Platt"]],
    [["Gender","Locale"],["Male","Manchester"]],
    [["Status","Transport"],["Student","Tram"]]]);
console.log("\nMap3");
console.log(Map3);

console.log(Map3.set(["favourite film","weapon choice"],["pulp fiction","Flamethrower"]))

console.log(Map3)
*/
let Peeps= [
    {firstname: "Bill",surname: "Geffries"},
    {firstname: "Bob",surname: "Flloyd"},
    {firstname: "Barry",surname: "Leyden"},
    {firstname: "Bernadette",surname:"Vickers" },
    {firstname: "Becky",surname: "Johnson"},
];

console.log(Peeps.map(peeps=>`${peeps.firstname} of House ${peeps.surname}` ));