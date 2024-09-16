console.log("hello World");

console.log(document.body.childNodes)

console.log(document.body.childNodes[0])

// JavaScript considers the space to go to new line as a text portion.

// TO go to the First ELement by skipping the spaces


let cont = document.body.childNodes[1]
console.log(cont)

// console.log(cont.firstChild)
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)


// Styling
cont.lastElementChild.style.color = "red";
cont.lastElementChild.style.backgroundColor = "black"


//  Accessing the Parent Element
cont.lastElementChild.parentElement

// Accessing the next Element
console.log(document.body.firstElementChild.children[3].nextElementSibling)

console.log(document.body.firstElementChild.children[3].previousElementSibling)