let num = prompt("Please Enter your NUmber to calculate Factorial: ")

let arr = []

for (i = 1; i <= num; i++){
    let item = i;
    arr.push(item)
}

console.log(arr)


const red = (a, b) => {
    return a * b;
}

console.log(arr.reduce(red))