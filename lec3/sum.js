// challenge 1
let sum=0;
for (let i=1;i<=20;i+=2){
    sum=sum+i;
}
console.log(sum);

// challenge 2
let sum2=0;
for (let i=1;i<=10;i++){
    sum2=sum2+i;
}
console.log(sum2);


// challenge 3
let Array=[10,20,30,40,50];
let sum3=0;
for (let i=0;i<Array.length;i++){
    sum3=sum3+Array[i];
}
console.log(sum3);

// challenge 4
let a=array[0];
for (let i=0;i<Array.length;i++){
    if (Array[i]>a){
        a=Array[i];
    }
}
console.log(a);