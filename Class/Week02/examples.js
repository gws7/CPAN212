// For Each
nums = [1,2,3,4,5,6];
sum = 0;

nums.forEach(element => {
    console.log(element);
    sum += element;
});

console.log("====")

//Spread operator -> ...
//Lets copy your array into values
nums2 = [1,2,3,5,8,10];
const [one, two, ...rest] = nums2;
console.log(one)
console.log(two)
console.log(rest)

console.log("====")

//Let vs Var
for(let i=0;i<5;i++){
    console.log("No block: let i: " + i);
}

for(var i=0;i<5;i++){
    console.log("No block: var i: " + i);
}

console.log("====")

//Now, consider it with blocking code: a timeout

for(let i=0;i<5;i++){
    setTimeout(() => {
        console.log("No block: let i: " + i);        
    }, 1000);
}

for(var i=0;i<5;i++){
    setTimeout(() => {
        console.log("No block: var i: " + i);        
    }, 1000);
}