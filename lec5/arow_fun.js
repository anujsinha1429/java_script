let multiply =(a,b)=> a*b;
console.log(multiply(5, 3));


let iseven=(num)=> num%2===0;
console.log(iseven(4));
console.log(iseven(5));


let greet= name => "hello "+name ;
console.log(greet("Alice"));

let max=(a,b)=> {
    if (a>b){
        return a;

    }
    return b;
}