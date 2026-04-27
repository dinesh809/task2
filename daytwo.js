let Students =[
    {id:1, name:"Naveen", mark:85, course:"MERN"},
    {id:2, name:"johan", mark:45, course:"python"},
    {id:3, name:"priya", mark:72, course:"java"},
    {id:4, name:"arun", mark:95, course:"react"}
];

// 1 loops

for(let s of Students){
    console.log( s.id, s.name, s.mark, s.course)
}

/* out put
1 'Naveen' 85 'MERN'
daytwo.js:11 2 'johan' 45 'react'
daytwo.js:11 3 'priya' 72 'java'
daytwo.js:11 4 'arun' 95 'react' */

//2 pass/fail

for(s of Students){
    if(s.mark >= 50 ){
        console.log(s.name + "-pass")
    }else{
        console.log(s.name + "-fail")
    }
}

/* out put
1 'Naveen' 85 'MERN'
daytwo.js:11 2 'johan' 45 'react'
daytwo.js:11 3 'priya' 72 'java'
daytwo.js:11 4 'arun' 95 'react'*/

// 3 grade system

for( s of Students){
    if(s.mark >= 90){
        console.log(s.name + "-Grade A")
    } else if(s.mark >=75 ){
        console.log( s.name + "-Grade B")
    }else if(s.mark >=50){ 
        console.log( s.name + "-Grade C")
    }else{
        console.log( s.name + "-fail")
    }

}
/* output

Naveen-Grade B
daytwo.js:46 johan-fail
daytwo.js:44 priya-Grade C
daytwo.js:40 arun-Grade A*/

//4 topper student

for( s of Students){
    if( s.mark >= 90){
        console.log( "Topper is" , s.name , "-", s.mark)
    }
}
/* output
Topper is arun - 95
*/
//5 course search

for(s of Students){
    if( s.course == "react"){
        console.log( "id:" + s.id, "name:" + s.name, "mark:" + s.mark, "course:" + s.course)
    }
}

/* output
id:4 name:arun mark:95 course:react*/

//6 add new student

Students.push ( {id:6, name:"rahul", mark:88, course: "Node js"})

console.log(Students)

/* output
0
: 
{id: 1, name: 'Naveen', mark: 85, course: 'MERN'}
1
: 
{id: 2, name: 'johan', mark: 45, course: 'python'}
2
: 
{id: 3, name: 'priya', mark: 72, course: 'java'}
3
: 
{id: 4, name: 'arun', mark: 95, course: 'react'}
4
: 
{id: 6, name: 'rahul', mark: 88, course: 'Node js'}
length
: 
5
[[Prototype]]
: 
Array(0)
*/

//7 attendance system

let status = "absent"

switch(status){
    case "present":
        console.log("welocme"); 
        break;
        case "absent":
        console.log("mark absent");
        break;
        case "leave":
        console.log(" approve leave")
        break;
        default: 
        console.log("invalid")
}
/*output
mark absent*/

//8 login system

let username = "admin";
let password = "1234";

if(username == "admin" || password == "1234"){
    console.log("Login sucess")
}else{
    console.log("Invalid")
}

/* output
Login sucess*/
