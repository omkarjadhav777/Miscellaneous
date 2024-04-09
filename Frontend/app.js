// const stu1={
//     name:"adam",
//     age:25,
//     marks:95,
//     getMarks: function(){
//         return this.marks;
//     }
// };

// const stu2={
//     name:"eve",
//     age:25,
//     marks:99,
//     getMarks: function(){
//         return this.marks;
//     }
// };

// const stu3={
//     name:"casey",
//     age:25,
//     marks:85,
//     getMarks: function(){
//         return this.marks;
//     }
// };

//this we create for every object this is wrong method 

// let arr=[1,2,3];
// let arr2=[1,2,3];
// arr.sayHello=()=>{
//     console.log("hello , i am arr");
// };

// arr2.sayHello=()=>{
//     console.log("hello , i am arr");
// };

//if we want sayhello function in array use with all array this is time wasting

//factory function 
// function personMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`hi,my name is ${this.name}`);
//         }
//     };
//     return person;
// }
// let p1=personMaker("adam",25);
// let p2=personMaker("eve",25);

///if p1.talk===p2.talk false (give fasle beacuse not efficient way doing this so we use new operator)

//constructors-doesn't return anything and start with capital 
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     //if we use only this not new in this case or person anything then it repesent the window 
//     //console.log(this);
// }
// Person.prototype.talk=function(){
//     console.log(`hi,my name is ${this.name}`);
// }
// let p1=new Person("adam",25);
// let p2=new Person("eve",25);
//this note take my shraddha di from mdn (mew key word)
// Description
// When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:

// Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
// Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].
// Note: Properties/objects added to the constructor function's prototype property are therefore accessible to all instances created from the constructor function.

// Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).
// If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)


//classes in js

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;

//     }
//     talk(){
//         console.log(`hi, my name is ${this.name}`);
//     }
// }

// let p1=new Person("adam",25);
// let p2=new Person("eve",25);

//console part
// Person {name: 'adam', age: 25}
// p2
// Person {name: 'eve', age: 25}
// p1.talk===p2.talk
// true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//inheritance 




// class Student{
//     constructor(name,age,marks){
//         this.name=name;
//         this.age=age;
//         this.marks=marks;
//     }
//     talk(){
//         console.log(`hi, i am ${this.name}`);
//     }
// }

// let stu1=new Student("adam",25,95);

// class Teacher{
//     constructor(name,age,subject){
//         this.name=name;
//         this.age=age;
//         this.subject=subject;
//     }
//     talk(){
//         console.log(`hi, i am ${this.name}`);
//     }
// }

//here we create teacher class also but we see that so things are get repeatating so that why we using inheritance



class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log("person class consturctor");
    }
    talk(){
        console.log(`hi, i am ${this.name}`);
    }
}



class Student extends Person{
    constructor(name,age,marks){
        console.log("studnet class consturctor");
       super(name,age);//parent class consturctor is being called 
        this.marks=marks;
    }
   
}

// let stu1=new Student("adam",25,95);

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
   
}
//console
// let stu1=new Student("adam",25,95);
// app.js:155 studnet class consturctor
// app.js:144 person class consturctor
