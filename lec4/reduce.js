// question1
let arr=[5,10,15,20];
let sum=arr.reduce((acc,num)=> acc + num, 0);
console.log(sum);


// question2
let arr2=[1,2,3,4];
let product = arr2.reduce((acc,num)=> acc*num ,1);
console.log(product);

// question3
let arr3=[12,5,19,7];
let max=arr3.reduce(( acc,num)=>{
    if(num>acc){
        return num;
    }
    else{
        return acc;
    }
})