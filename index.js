// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
} 

function destructivelyPrependCat(name) {
    cats.unshift(name)
} 

function destructivelyRemoveLastCat() {
    cats.pop()
} 

function destructivelyRemoveFirstCat() {
    cats.shift()
} 

const newLastCat = cats.slice();
function appendCat(name) {
    newLastCat.push(name);
    return newLastCat
} 

const newFirstCat = cats.slice();
function prependCat(name) {
    newFirstCat.unshift(name);
    return newFirstCat
} 

const lastCatGone = cats.slice();
function removeLastCat() {
    lastCatGone.pop();    
    return lastCatGone
} 

const firstCatGone = cats.slice();
function removeFirstCat() {
    firstCatGone.shift();    
    return firstCatGone
} 