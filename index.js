// Write your solution here!
let drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(){
    drivers.push('Ralph');
}

function destructivelyPrependDriver(){
    drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

const copyOfDrivers = [...drivers,'Broom'];

function appendDriver(){

    return copyOfDrivers;
}

const copyOfDrivers2 = ['Arnold', ...drivers];

function prependDriver(){
    return copyOfDrivers2;
}

const copyOfDrivers3 = drivers.slice(0,2);

function removeLastDriver(){
    
    return copyOfDrivers3;
}

const copyOfDrivers4 = drivers.slice(1);

function removeFirstDriver(){
    console.log(copyOfDrivers4);
    console.log(drivers);
    return copyOfDrivers4;
}