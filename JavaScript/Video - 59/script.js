let num1 = prompt("Please Enter the Number: ")
let num2 = prompt("Please Enter the Number: ")
let symbol = prompt("Please Enter the Symbol: ")
let a = Math.random()

console.log(a)

if (a <= 0.1) {
    if(symbol == "+") {
        result =  num1 - num2;
        console.log(result);
    } else if(symbol == "*") {
        result = num1 + num2;
        console.log(result);
    } else if(symbol == "-") {
        result = num1 / num2;
        console.log(result);
    } else if(symbol == "/") {  // Change 'else' to 'else if'
        result = num1 ** num2;
        console.log(result);
    } else {
        console.log("Invalid symbol entered.");
    }
}
else{
    if(symbol == "+") {
        result = num1 + num2;
        console.log(result);
    } else if(symbol == "*") {
        result = num1 * num2;
        console.log(result);
    } else if(symbol == "-") {
        result = num1 - num2;
        console.log(result);
    } else if(symbol == "/") { 
        result = num1 / num2;
        console.log(result);
    } else {
        console.log("Invalid symbol entered.");
    }
}


