
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
    


