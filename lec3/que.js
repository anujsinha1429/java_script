// question 1
let arra=[1,2,3,4,5];
for (let i=0;i<arr.length;i++){
    console.log(arr[i]*2);
}

// question 2
for (let i=0;i<arr.length;i++){
    if (arr[i]%2==0){
        console.log(arr[i]);
    }
}

// quetion 3 
let array=[];
for (let i=0;i<arr.length;i++){
    array.push(arr[i]*arr[i]);
}
console.log(array);

// google 
let arr = [10,20,30,40,50];
for (let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}

// bonus que 
let sum=0;
let arr1 = [10,20,30,40,50];
for (let i=0;i<arr1.length;i++){
    sum=sum+arr1[i];
}
console.log(sum/arr1.length);