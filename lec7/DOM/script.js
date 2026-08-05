// .getElementById is used to select an element by its ID
const heading = document.getElementById("heading");

console.log(heading);


// .innerText is used to change the text of the element
heading.innerText = "Welcome to JavaScript";

// .querySelector is used to select an element by its CSS selector
const heading = document.querySelector("#heading");

heading.style.color = "red";
heading.style.backgroundColor = "yellow";

// change text 
const heading= document.querySelector("#heading");
heading.innerText = "Dom practice";

const paragraphs = document.querySelectorAll(".msg");
paragraphs[0].style.color="blue";
paragraphs[1].style.color="blue";
paragraphs[2].style.color="blue";

// now we will change the colorof all the paragraphs using a loop
for (let i=0;i<paragraphs.length;i++){
    paragraphs[i].style.color="blue";
}