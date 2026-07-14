let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr);
//push()
arr.push(60);
console.log("Afetr Push:", arr);

//pop()
arr.pop();
console.log("After Pop:", arr);

//Unshift()
arr.unshift(5);
console.log("After unshift:", arr);

//shift()
arr.shift();
console.log("After shift:", arr);

//Includes()
console.log("Includes 20:", arr.includes(20));

//IndexOf()
console.log("index of 30:", arr.indexOf(30));

//join()
console.log("join:", arr.join("-"));

//Reverse()
console.log("Reverse:", [...arr].reverse());

//Sort()
let nums = [30, 50, 10, 70];
console.log("Sort:", nums.sort((a, b) => a - b));

//slice()
    console.log("slice(1, 3):", arr.slice(1, 3));

//Splice()
let spliceArr = [...arr];
spliceArr.splice(1, 1, 25);
console.log("splice:", spliceArr);

//concat()
let arr2 = [60, 70];
console.log("concat:", arr.concat(arr2));

//ForEach()
console.log("forEach:");
arr.forEach(num => console.log(num));
