//1. 
  
//  let obj = {
//   x:45,
//   y:"Hello World ",
//   z:function(){
//       console.log("X  value   >>>  " , this.x)
//     return this.x;
//   }
//  }
//  console.log("X val 1 >>>  ", obj.x, "Z >>>   ",  obj.z);

// //  2. Explain Hoisting in javascript.

// hoistedVariable = "10";

// console.log("Hoisted Variables  >>>  ", hoistedVariable);

// var hoistedVariable;

// hoistedArr=[12, 34, 56, 78, 89];
// console.log("Hoisted Array  >>>  ", hoistedArr);

// var hoistedArr;


// // 6. Explain Implicit Type Coercion in javascript.

// var x = 3;
// var y = "3";
// console.log("x + y  >>> " , x+y);

// let x1= 24;
// let y1 = "Hello world ";
// console.log("x1+ y1 >>>  ", x1 + y1);

// var a = 3;
// var b = "3";

// console.log("a - b >>>>  ", a-b);
// console.log("a * b >>> ", a*b);

// var p = 0;
// var q = 23;

// if(p){console.log("value of p >>>  ", p)};
// if(q){console.log("value of q >>> ", q)};

// //Boolean Coersion 

// var k = 220;
// var m = "hello";
// var n = undefined;

// k || m;
// console.log("k || m >>> ", k||m);
// k || n;
// console.log("k || n >>> ", k||n);
// k && m;
// console.log("k && m  >>> ", k && m );
// m && n;
// console.log("m && n >>>> ", m && n);

// if(k && m){
//   console.log("k && m >>>  ", "code runs");
// }

// if(k || n ){
//   console.log("k || n >>> ", "code Runs ")
// }


// console.log("Check a string value >>>> ", isNaN("Hello"));
// console.log("Check a string number value >>>> ", isNaN("56"));
// console.log("Check a number value >>>> ", isNaN(12345));
// console.log("Check a boolean value >>>> ", isNaN(true));
// console.log("Check a boolean value >>>> ", isNaN(false));
// console.log("Check a undefined value >>>> ", isNaN(undefined));

/** Higher Order Function  */

// function higherOrder(fn){
//   fn();
// }
// higherOrder(function (){console.log("hello world")});


// function higherOrder2(){
//   return function(){
//      console.log("write your code here")
//     return "do Something";
//   }
// }

// var x = higherOrder2();
// console.log("second time running code >>> ", x());



/** Let's define this key words  */

// let obj = {
//   name:"Vivek",
//   x:234,
//   y:"Hello world ",
//   z:function(){
//     console.log("X >>>> ", this.x, "Name >>>> ", this.name);
//     return this.name;
//   }
// }
// obj.name = "Sachin";
// console.log("Object Value >>>>  ", obj.z());

// let obj = {
//   name:"vivek",
//   getName:function(){
//     console.log(this.name);
//   }
// }

// let getName = obj.getName;
// let obj2 = {
//   name:"Sudhir",
//   getName
// }

//  obj2.getName();


// var obj1 = {
//   address : "Mumbai,India",
//   getAddress: function(){
//   console.log(this.address); //undefined
//   }
//   }
//   var getAddress = obj1.getAddress;
//   var obj2 = { name:"akshay", getAddress};
//   obj2.getAddress();

// function sayHello(obj){
//   console.log("hello "+ this.name); // undefined
// }

// let obj = {
//   name:"Kanchan",
// }

// sayHello(obj)

// function sayHello() {
//   console.log("Hello " + this.name);
// }

// let obj = {
//   name: "narayan"
// }
// sayHello.call(obj);


// var person = {
//   age:23,
//   getAge:function(){
//     console.log("Age >>> "+ this.age) // Age >>> 54
//     return this.age;
//   }
// }

// var person2 = {
//   age:54
// }

// person.getAge.call(person2);

// function saySomething(message) {
//   console.log(this.name + " is "+ message );
//   return(this.name + " is "+ message )
// }

// let obj = {
//   name:"Sudhir",
// }

// saySomething.call(obj, "awesome");

//apply() methods 

// function saySomething(message) {
//   console.log(this.name + " is "+ message);
// }

// let obj = {name:"Vivek"};
// saySomething.apply(obj, ["awesome"]);

/** Bind() methods  */

// let bikesDetails = {
//   name:"Vivek",
//   displayDetails:function(registrationNumber, brandName){
//         console.log(this.name +"  bike details >> " + registrationNumber +" "+ brandName );
//         return (this.name +"  bike details >> " + registrationNumber +" "+ brandName)
//   }
// }

// let person1 = {name:"Vivek "};
// let detailsOfPerson1 = bikesDetails.displayDetails.bind(person1, "T6737GF774", "Bullet");

// detailsOfPerson1();


/** Guess the code  */

// function func1(){
//   setTimeout(() => {
//     console.log(x);
//     console.log(y)
//   }, 3000);
//   var x= 12;
//   var y = 24;
// }

// func1();

// function func2(){
//    for(let i = 0; i < 3; i++){
//     setTimeout(()=> {
//       console.log(i)
//     }, 1000)
//    }
// }

// func2();


// (function () {
//   setTimeout(()=> console.log(1), 2000);
//   setTimeout(()=> console.log(2), 0);
//   setTimeout(() => console.log(3), 1000);
//   console.log(4);
// })();

// let x = {} , y={name:"vinay"}, z={name:"jhon"};

//   x[y] ={name:"Vishal"};
//   x[z] = {name:"Akashy"};
//   console.log(x[y]);
//   console.log([y], [z], x[z])

// function runFunc(){
//   console.log("1" + 1);
//   console.log("A" - 1);
//   console.log(2 + "-2" + "2");
//   console.log("Hello" - "World" + 78);
//   console.log("Hello"+ "78");
  
// }

// runFunc()

// let a = 0;
// let b = false;
// console.log((a == b));
// console.log((a === b));

var x = 23;
(function(){
var x = 43;
(function random(){
x++;
console.log(x);
var x = 21;
})();
})();
