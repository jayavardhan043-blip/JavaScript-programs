let arr = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
let target = 58;
let found = false;
for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if (arr[i][j] === target){
            console.log("Found at Row:", i, "column", j);
            found = true;
        }
    }
}
if(!found){
    console.log("Element not found")
}