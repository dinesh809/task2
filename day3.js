//function basic

function studentform(name, age, course){
    console.log( "Name: " + name);
    console.log( "age: " + age);
    console.log( "course: "+ course);
}
studentform("Naveen", 22, "MERN");

/*output
Name: Naveen
java.js:5 age: 22
java.js:6 course: MERN */

//task2 addtion,subration,multipication

function calc(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
}
calc(30,20);

/* output
 50
 10
 600
*/

// task 3 call same functon for 3 users

function user(name){
    console.log("Hello " +name)
}
user("Naveen");
user("Praveen");
user("sai");

/* output
Hello Naveen
Hello Praveen
Hello sai*/

//task4 return value

function square(num){
    return(num*num)
}
console.log(square(5));

/* output
25*/

// task5

function testscope(){
    let secret = "javascript";
    console.log("inside:", secret);
}
testscope();

/* let is a type of block , so if we print outside statement is gives error

out put 
inside: javascript
*/
// task6 merge arrys

let boys = ["car","bicke"];
let girls = ["doll","teddy"];

let result = [...boys, ...girls];

console.log(result);
/* output
inside: javascript
*/

//task7 unlimmited numbers

function sumall(...nums){
    let sum = 0;
    for(let n of nums){
        sum += n;
    }
    return sum;
}

console.log(sumall(10, 20, 30, 40,));
/* output 
100
*/

// task 8 destucturing

let colours = ["red", "green", "blue"];
let [c1, c2, c3] = colours;

console.log(c1, c2, c3);

/* output
red green blue
*/

//task9 object destration

let emp = {
    name:"Naveen",
    role: "Developer",
    salary: "5LPA"
}
let {name, role} = emp;

console.log(name, role);

/* output 
Naveen Developer
*/

// task 10 offer generator
// offer generator

function* offergenerator(){
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "try again";
    return 'no cash back';
}
let gen = offergenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

/* output
10% cashback
java.js:133 20% cashback
java.js:134 50% cashback
java.js:135 try again
java.js:136 no cash back
*/

// task 11 curry function

function add(a){
    return function(b){
        return function(c){
            return a + b+ c;
        }
    };
};
console.log(add(10)(20)(30));

// output=60

// task 12 student mark analizer

function marksanalizer(...nums){
    let total = nums.reduce((sum, n)=> sum + n, 0);
    let avg = total / nums.length;
    
    console.log("total =", total);
    console.log("avrage =", avg);
};

    marksanalizer(80,90,70,60);

    /* output
    total = 300
    avrage = 75
    */

    // challange task - company level

    function register(name, role, ...skills){
        console.log("Name:", name);
        console.log("Role:", role);
        console.log("Skills:", skills.join(" "));
    }
    
register("Naveen", "Developer", "HTML", "CSS", "JS", "REACT")


/* output
Name: Naveen
java.js:180 Role: Developer
java.js:181 Skills: HTML CSS JS REACT
*/




