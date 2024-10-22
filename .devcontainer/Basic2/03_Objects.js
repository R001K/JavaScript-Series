//Singleton
//object.create


// Objects literals
const mySymbol = Symbol("key1")

const  JsUser ={

    name: "Rahul",
    [mySymbol]: "myKey1",
    age: 22,
    location: "hisar",
    email: "rahul@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log( JsUser.age);
console.log( JsUser["email"]);
console.log( JsUser[mySymbol]);

//Change the value in objects
JsUser.email= "rahul11@gmail.com"
//Object.freeze(JsUser);

JsUser.email= "rahuloutlook";
//console.log(JsUser);

//Function
JsUser.greeting = function(){
 console.log("Hello Rahul Khambra");   
}

JsUser.greetingTwo = function(){
    console.log(`Hello users,${this.name}`);      
}

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo);



