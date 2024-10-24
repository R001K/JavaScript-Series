//Singleton Object
//const tinderUSer = new Object()

// non- ingleton Object
const tinderUSer ={}

tinderUSer.id= "123abc"
tinderUSer.name= "rahul"
tinderUSer.isLoggedIn=  false

//console.log(tinderUSer);

const regularUSer ={
    email: "some@gmail.com",
    fullname:{
        userfullName:{
            firstname: "rahul",
            lastname:"khambra"
        }
    }
}

//console.log(regularUSer.fullname?.userfullName.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2= {3: "a", 4:"b"}
const obj5= {4: "a", 5:"b"}



const obj3 = {obj1, obj2}
const obj4 = Object.assign(obj1, obj2);
console.log("obj444",obj5);

const obj6= {...obj1, ...obj2}
console.log("obj6",obj6);

console.log("tinderUSer",tinderUSer);

console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));

console.log(tinderUSer.hasOwnProperty('isLoggedIn'));

