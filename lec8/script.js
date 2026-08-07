const btn2 = document.querySelector("#btn");

btn2.addEventListener("click", () => {
    console.log("Hello");
});

// output hello hello hello 


const heading = document.querySelector("#heading");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    heading.innerText = "DOM";
});

// output :heading text changes to DOM when button is clicked