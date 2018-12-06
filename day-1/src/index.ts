import *  as fs from 'fs';

const changes:Buffer = fs.readFileSync('input')
const lines:Array<string> = changes.toString().split("\n");
let currentValue: number = 0;
let freqs: Array<number> = [];
let foundValue: boolean = false;

function processLine(line:string) {
  let chars: Array<string> = line.split("");
  let op: string | undefined = chars.shift();
  if (op) {
    let num: number = parseInt(chars.join(""));
    freqs.push(currentValue);
    if (op === "+") {
      currentValue += num;
    } else if (op === "-"){
      currentValue -= num;
    }
  }
}

function searchUntilDupeFreq() {
  while(!foundValue) {
    findFreq()
  }
}

function findFreq(){
  for (let line of lines){
    if (freqs.indexOf(currentValue) != -1){
      foundValue = true;
      console.log(`Found it: ${currentValue}`);
      break;
    }
    processLine(line);
  }
}

findFreq();
console.log(`Finished procesing changes list, the final frequency is: ${currentValue}`);

console.log(`Searching for repeating frequency...`);
searchUntilDupeFreq();
