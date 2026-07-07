// quetion1 
let str ="madam";
let reversed="";
for (let i=str.length-1;i>=0;i--){
    reversed+=str[i];
}
if (str==reversed){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}
// quetion2
let sentence = "I love JavaScript programming";
let words = sentence.split(" ");
let highestLength = 0;
let longestWord = "";
for (let i=0;i<words.length;i++){
    if (words[i].length>highestLength){
        highestLength=words[i].length;
        // longestWord=words[i];
    }
}
console.log(highestLength);

// quetion 3 
let string="banana";
let charCount={};
for (let i=0;i<string.length;i++){
    let char=string[i];
    if (charCount[char]){
        charCount[char]++;
    }
    else{
        charCount[char]=1;
    }
}
console.log(charCount);