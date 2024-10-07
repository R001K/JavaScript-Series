const name = "rahul"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rkTech')

// String InBuitFunction
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newTringOne = "  rahul  ";
console.log(newTringOne);
console.log(newTringOne.trim());

// Replace
const url ="https://rahul.com/rahul%20khambra"
console.log(url.replace('%20', '-'));
console.log(url.includes('rahul'));








