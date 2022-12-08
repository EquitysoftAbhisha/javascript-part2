// how its works(javascript)


// complilation
// code execution 


// why compilation 

// how javascript code executes

// what is global exection context ?
// what is local execution context /
// clouseres


// lexical environment , scope chain

const lastName = "bhesaniya";

const printName = function(){
    const firstName = "Abhisha";
    function myfunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myfunction()
}
printName();

// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%

// function can return functions
function outerFunction(){
    function innerFunction(){
        console.log("hello world")
    }
    return innerFunction;
}
const ans = outerFunction();
// console.log(ans);
ans();

function printfullName(firstName,lastName){
    function printName(){
        console.log(firstName,lastName);
    }
    return printName;
}
const answer = printfullName("Abhisha","patel");
// console.log(answer);
answer();



function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }

}
const an = hello("arg");
an();

function powerfunction(power){
    return function(number){
        return number ** power;
    }
}
const cube = powerfunction(3);
const result = cube(2);
console.log(result)