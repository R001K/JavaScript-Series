// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreatedDate = new Date (2023, 0, 23)
console.log(myCreatedDate.toDateString());

//let myCreatedDatee = new Date (2023, 0, 23, 5, 3)
let myCreatedDatee = new Date ("2023-01-14");
console.log(myCreatedDatee.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDatee.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth);


// String interpolution
// `{newDate.getMonth()} the time is`

// newDate.toLocaleString('default', {
//     weekday: "long",
//     timeZone: ""
// })





