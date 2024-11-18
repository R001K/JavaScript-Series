
function sayMyName(){
console.log("R");
console.log("A");
console.log("H");
console.log("U");
console.log("L");
}
sayMyName()

function addTwoNumber(number1, number2){

    if (typeof number1 == typeof number2){
        console.log(number1 + number2);
    }
    else{
        console.log("Enter the correct inputs");       
    }
}
addTwoNumber(7,10);

function addTwoNumber(number1, number2){
    // let result = number1 + number2;
    return number1 + number2   
}
const result = addTwoNumber(5,6)
console.log("Results:", result);


function  loginUserMessage(username ="khambra"){
    if (username ===  undefined){
        console.log("Please enter the Any UserName");      
}
   else{
        return `${username} just logged in`
}
}
 console.log("LogginUserName", loginUserMessage());
 
    
// UserName and Password function

function loginPage(username , password){

    if(username, password === undefined){
       
        console.log("Login Failed, Please Enter Inputs for further process");       
    }
    else{
    return `Login Sucessfully: ${username} just logged in`
}
}
console.log(loginPage("rahul","khambra"));
    


// rest/spread operator = ...
function calculateCartPrice(...num1){
return num1

//return num1.reduce((acc, curr) => acc + curr, 0);
}
console.log(calculateCartPrice(200, 600, 800));

// const totalPrice = calculateCartPrice(200, 600, 800);
// console.log(`Total Price: ${totalPrice}`);


const user={
    username: "Rahul",
    prices: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.user} and price is ${anyObject.prices}`);   
}
handleObject(user)


const mynewArray =[200, 400, 600, 800]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(mynewArray));


