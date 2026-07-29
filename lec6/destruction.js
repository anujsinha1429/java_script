// que1:

let colors = ["red", "green", "blue"];
let [redcolour, greencolour, bluecolour] = colors;
console.log(redcolour); // Output: red
console.log(greencolour); // Output: green
console.log(bluecolour); // Output: blue

// que2:

let car = {
    brand: "BMW",
    model: "M4",
    year: 2024
};
let { brand, model, year } = car;
console.log(brand); // Output: BMW
console.log(model); // Output: M4
console.log(year); // Output: 2024

// que3:

let person = {
    name: "Anuj kumar ",
    city: "Patna"
};
let { name: personName, city}=person;
console.log(personName);
console.log(city);

// que4:

let x = 100;
let y = 200;
[x,y]=[y,x];
console.log(x); // Output: 200
console.log(y); // Output: 100
