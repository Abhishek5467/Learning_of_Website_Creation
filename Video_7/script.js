console.log(x)
var x = 5;
greet();
function greet(){ // this will be hoisted
    console.log("Hello World from Greet function");
}

const greet2 = function(){
    console.log("Hello World from Greet2 function");
}
greet2();

const greet3 = () => {
    console.log("Hello World from Greet3 function");
}
greet3();

let arr1 = [1, 2, 3, 4, 5];
arr1.forEach(function(element){
    console.log(element);
})

let arr2 = [1, 2, 3, 4, 5];

let arr3 = arr1.concat(arr2);
console.log(arr3);

let obj = new Object();
obj.name = "Abhishek";
obj.age = 21;
console.log(obj);

let date = new Date();
console.log(date);

let reg = new RegExp(/a-zA-z0-9/gi); // regular expression
console.log(reg);

let err = new Error('This is an error');
console.log(err);

// let sym = new Symbol();
// console.log(sym);

let string = new String("This is a string");
console.log(string);

let num = new Set([1, 2, 3, 4, 5]);
console.log(num);

let map = new Map([['as','1'],['bs','2']]);
console.log(map);

class Employee{
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    greet(){
        console.log("Jai Shree Ram " + this.name);
    }
}

let emp1 = new Employee("Abhishek", 20);
emp1.greet();

class Animator extends Employee{
    Role;
    constructor(name, age, Role){
        super(name, age);
        this.Role = Role;
    }

    greet(){
        console.log("Jai Shree Ram " + this.name + " " + this.Role);
    }

}

let emp2 = new Animator("Abhishek", 20, "Animator");
emp2.greet();

try {
    console.log("Jai Shree Ram");
    throw new Error("Error Message");
    console.log("After Error");
}catch(err){
    console.log(err);
}finally {
    console.log("Finally block");
}

// arrow function does not have its own this keyword, it uses the this keyword of the parent function