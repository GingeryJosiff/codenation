/*
const pressGrindBeans = () => {
    console.log("GrindGrindGrind");
}
pressGrindBeans();
*/



/*
let coffeeIsGrinding = false;

const pressGrindBeans = () =>{
    if(coffeeIsGrinding){
        console.log("StopGrind");
        coffeeIsGrinding=false;
    }
    else{
        console.log("Grind is about to begin");
    }
}
*/



/*
const cofOrd = (size, type)=>{
    console.log(`Odering a ${size} ${type} for Joe`);
}

cofOrd("large", "latte");
cofOrd("small","americano");
cofOrd("massive","espresso");
*/



/*
const addUp=(num1,num2) =>{
    return num1+num2;
}

console.log(addUp(3,2));
*/



/*
let ordCount = 0;

const takeOrd = (topping) =>{
    console.log(`${topping} pizza`);
    ordCount++;
}

takeOrd("pineapple");
takeOrd("ham");
takeOrd("peperoni");
console.log(`Order Count :  ${ordCount}`);
*/



/*
let pinStore=1234;
let balance = 100;

const cashMachine = (pinEnter, accNum, withdrawal)=>{
    if(pinStore===pinEnter&&withdrawal<=balance){
            console.log(`Your withdrawal of ${withdrawal} is being processed`);
    }
    else if(pinStore===pinEnter&&withdrawal>balance){
        console.log(`Insufficient funds to process withdrawal of ${withdrawal}`);
    }
    else if(pinStore!==pinEnter){
        console.log("***Incorrect PIN****\n\n**Please re-enter**");
    }
}

console.log("Wrong PIN:\n")
cashMachine(1334,55556666,110)

console.log("\n\n\nOverdrawn:\n")
cashMachine(1234,55556666,110)

console.log("\n\n\nWithdrawal approved:")
cashMachine(1234,55556666,100)
*/



let ordersCount = 0;

const subOrder=(fill1,fill2,fill3,fill4,fill5)=>{
    console.log(`You're ${fill1},${fill2},${fill3},${fill4} and ${fill5} sub is being made`);
    ordersCount++;
    console.log("Subs on order : " + ordersCount);
}

subOrder("meatball","cheese","pickle","jalepeno","olives");


