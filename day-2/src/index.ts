import *  as fs from 'fs';

const changes:Buffer = fs.readFileSync('input')
const lines:Array<string> = changes.toString().split("\n");

interface LetterMap {
  [key: string]: number;
}

function exactlyTwoAnyLetter(word: string): boolean {
  return exactlyOfAnyLetter(word, 2);
}

function exactlyThreeAnyLetter(word: string): boolean {
  return exactlyOfAnyLetter(word, 3);
}

function exactlyOfAnyLetter(word: string, times:number): boolean {
  let map: LetterMap = getLetterMap(word);
  for(let letter in map){
    if(map[letter] == times){
      return true;
    }
  }
  return false;
}

function getLetterMap(word: string): LetterMap {
  let hash: LetterMap = {};
  for (let letter of word.split('')){
   if (hash[letter] == undefined){
     hash[letter] = 1
   } else {
     hash[letter] += 1
   }
  }
  return hash;
}

let seenWithTwo:number = 0;
let seenWithThree:number = 0;

for (let line of lines){
  if(exactlyTwoAnyLetter(line)){
    seenWithTwo += 1
  }

  if(exactlyThreeAnyLetter(line)){
    seenWithThree += 1
  }
}
console.log(`checksum: ${seenWithTwo * seenWithThree}`)
