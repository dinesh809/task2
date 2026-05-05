// Level 1: Basic Practice

// Task 1: Array Basics


console.log("\nLevel 1: Basic Practice")
console.log("\nTask 1: Array Basics");

let arr1 = [10,20,30,40,50];

console.log("First:", arr1[0]);
console.log("Last:", arr1[arr1.length-1]);
console.log("Length:", arr1.length);

/* Output:
First: 10
Last: 50
Length: 5
*/


// Task 2: Push & Pop

console.log("\nTask 2: Push & Pop");

let arr2 = [1,2,3];

arr2.push(4,5);
arr2.pop();

console.log("Array:", arr2);

/* Output:
 Array: [1,2,3,4]
*/




// Task 3: Includes Check

console.log("\nTask 3: Includes Check");

let arr3 = ["html","css","javascript","react"];

console.log("Has JS:", arr3.includes("javascript"));

/* Output:
 Has JS: true
*/


// Level 2: Intermediate

// Task 4: Filter Salaries


console.log("\nLevel 2: Intermediate")
console.log("\nTask 4: Filter Salaries");

let emp4 = [
 {name:"A",salary:10000},
 {name:"B",salary:50000},
 {name:"C",salary:30000}
];

let res = emp4.filter(e => e.salary > 20000);

console.log("Filtered:", res);

/* Output:
 Filtered: [{name:"B",salary:50000},{name:"C",salary:30000}]*/





// Task 5: Map Names

console.log("\nTask 5: Map Names");

let names = emp4.map(e => e.name);

console.log("Names:", names);

/* Output:
 Names: ["A","B","C"]*/





// Task 6: Reduce Sum

console.log("\nTask 6: Reduce Sum");

let total = emp4.reduce((s,e)=>s+e.salary,0);

console.log("Total:", total);

/* Output:
 Total: 90000
*/


// Level 3: Logic Buliding

// Task 7: Remove Duplicates

console.log("\nLevel 3: Logic Building")
console.log("\nTask 7: Remove Duplicates");

let arr7 = [1,2,2,3,3,4,4,5];

let unique = [...new Set(arr7)];

console.log("Unique:", unique);

/* Output:
 Unique: [1,2,3,4,5]*/





// Task 8: Largest Number

console.log("\nTask 8: Largest Number");

let arr8 = [10,200,5,90];

console.log("Largest Num:", Math.max(...arr8));

/* Output:
 Largest Num: 200*/




// Task 9: Reverse String

console.log("\nTask 9: Reverse String");

let str = "hello", rev="";

for(let i=str.length-1;i>=0;i--) rev+=str[i];

console.log("Reversed:", rev);

/* Output:
Reversed: olleh*/




/* Level 4: Advanced Thinking*/
// Task 10: Group by Salary

console.log("\nLevel 4: Advanced Thinking")
console.log("\nTask 10: Group by Salary");

let emp10 = [
 {name:"A",salary:10000},
 {name:"B",salary:50000},
 {name:"C",salary:10000}
];

let res1 = emp10.reduce((a,e)=>{
 (a[e.salary]=a[e.salary]||[]).push(e.name);
 return a;
},{});

console.log("Grouped:", res1);

/* Output:
Grouped: {10000:["A","C"],50000:["B"]}
*/


// Task 11: Flatten Array

console.log("\nTask 11: Flatten Array");

let arr11 = [1,[2,[3,[4]]]];

function flatten(a){
 let res = [];
 for(let i of a){
  Array.isArray(i) ? res = res.concat(flatten(i)) : res.push(i);
 }
 return res;
}

console.log("Flatten:", flatten(arr11));

/* Output:
 Flatten: [1,2,3,4]*/



// Task 12:

console.log("\nTask 12: Custom Sort");

let arr12 = [5,2,9,1];

arr12.sort((a,b)=>b-a);

console.log("Sorted:", arr12);

/* Output:
 Sorted: [9,5,2,1]*/




// Task 13: 

console.log("\nTask 13: Second Largest");

let arr13 = [10,50,20,40];

let second = [...new Set(arr13)].sort((a,b)=>b-a)[1];

console.log("Second Largest:", second);

/* Output:
  Second Largest: 40 */




// Task 14:

console.log("\nTask 14: Count Characters");

let str14 = "aabbccdde";
let obj = {};

for(let c of str14){
 obj[c] = (obj[c] || 0) + 1;
}

console.log("Count:", obj);

/*Output:
 Count: {a:2,b:2,c:2,d:2,e:1}*/