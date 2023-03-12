// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    return cats.push("Ralph");
} 

function destructivelyPrependCat() {
   return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop("Garfield");
}

function destructivelyRemoveFirstCat(params) {
    return cats.shift("Milo");
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
 return cats.slice(1);  
}