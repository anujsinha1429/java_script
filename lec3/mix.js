// question1 
let arr = [2,5,7,8,10];
let arr1=[];
for(let i=0;i<arr.length;i++){
    if (arr[i]%2==0){
        arr1.push(arr[i]);
    }

}
console.log(arr1);

// question2
let students = [
    {
        name:"Anuj",
        marks:85
    },
    {
        name:"Rahul",
        marks:70
    },
    {
        name:"Aman",
        marks:95
    }
];
for (let i=0;i<students.length;i++){
    if (students[i].marks>=80){
        console.log(students[i].name);
    }
}

// question3
let arr2 = [1,2,3,4,5];
let double=[];
for (let i=0;i<arr2.length;i++){
    double.push(arr2[i]*2);
}
console.log(double);
