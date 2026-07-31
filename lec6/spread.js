// que 1 
const arr = [3, 4];

const newArr = [1, 2, ...arr, 5];

console.log(newArr);


// que2 
const obj = {
    name: "Anuj"
};

const result = {
    age: 21,
    ...obj
};

console.log(result);

// que 3 
const obj1 = {
    a: 1
};

const results = {
    ...obj,
    a: 2,
    a: 3
};

console.log(result);