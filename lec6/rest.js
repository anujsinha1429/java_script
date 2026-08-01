// que1
function show(...nums) {
    console.log(nums);
}

show(1, 2, 3);

// que2
function test(a, ...nums) {
    console.log(a);
    console.log(nums);
}

test(10, 20, 30, 40);

// que3
const nums = [1, 2];

const result = [...nums, ...[3, 4]];

console.log(result);

// que4
function sum(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

sum(...[5, 10, 15, 20]);