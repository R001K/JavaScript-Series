
// Array delaration
const myArr =[0,1, 56, 66, 13, "rahul", "true"]
const myHeros = ["Avengers", "Goku"];
const myArr2 = new Array(1, 23, 3, 4)

console.log(myArr[4]);
console.log(myArr);

//Array methods 
myArr.push(6)           // add the value in the last array
myArr.pop()           // remove the last value of array
console.log(myArr);

myArr.unshift(9);        // add the value of array in the first 
myArr.shift();           // remove the value of array in the first 
console.log(myArr);
 
console.log(myArr.includes(9));        // true and false
console.log(myArr.indexOf(91));       // find the elements of index


const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);

// Slice, splice methods

console.log("A", myArr);
const myn1 = myArr.slice(1, 3);           // Slice not include the range
console.log("Answer",myn1);

console.log("B", myArr); 
const myn2 = myArr.splice(1, 3);         // Splice is include the range and it's manuplate the array
console.log("C", myArr);

console.log("Answer",myn2);












