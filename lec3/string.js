// challenge 1 
let str = "Programming";
for (let i=0;i<str.length;i++){
    console.log(str[i]);
}

// challenge 2 
let count =0;
for (let i=0;i<str.length;i++){
    count++;
}
console.log(count);

// challenge 3
let str1 = "Education";
let str2 = "aeiouAEIOU";
let vowelCount = 0;
for (let i=0;i<str1.length;i++){
    if (str2.includes(str1[i])){
        vowelCount++;
    }
}
console.log(vowelCount);

// challenge 4
let str3 = "anuj";
let reversed = "";
for (let i=str3.length-1;i>=0;i--){
    reversed += str3[i];
}
console.log(reversed);
