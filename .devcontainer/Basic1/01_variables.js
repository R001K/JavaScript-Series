const accountId = 14455578
let accountEmail = "rahul@gmail.com"
var accountPassword = "12345"
accountCity = "hisar"

//accountId = 2

console.log("accountId:"+ accountId);

accountEmail = "golu@gmail.com"
accountPassword = "1212"
accountCity = "Noida"

/*
Not use var because of issue in block scope and fuctional 
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);

