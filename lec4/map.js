// question1 
let arr=[5,10,15];
let newarr=arr.map(num=> num+10);
console.log(newarr); // Output: [15, 20, 25]

// quetion 2
let prices=[100,200,300];
let totalPriceewithgst=prices.map(price=> price*1.18);
console.log(totalPriceewithgst); 

// quetion 3
let students=[
{
name:"Anuj",
marks:80
},
{
name:"Rahul",
marks:70
}
];
let studentNames=students.map(student=> student.name);
console.log(studentNames); 

// homework
let numbers=[1,2,3,4,5];
let doubledNumbers=numbers.map(num=> num*2);
console.log(doubledNumbers); 

