// // Function to generate a random color
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// // Apply random colors to the boxes
// for (let i = 1; i <= 5; i++) {
//     document.getElementById('box' + i).style.backgroundColor = getRandomColor();
// }

let boxes = document.getElementsByClassName("box")
console.log(boxes)

function getRandomColor() {
    let var1 = Math.ceil(0 + Math.random() * 255)
    let var2 = Math.ceil(0 + Math.random() * 255)
    let var3 = Math.ceil(0 + Math.random() * 255)

    return `rgb(${var1}, ${var2}, ${var3})`
}

Array.from(boxes).forEach(element => {
    element.style.backgroundColor = getRandomColor();
    element.style.color = getRandomColor();
});