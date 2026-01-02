//lexical scoping

// function outter() {
//   let name = "Kushal";
//   console.log(name);

//   function inner() {
//     let age = 22;
//     console.log(`Name: ${name}`);
//   }

//   function innertwo() {
//     console.log(age);
//   }

//   inner();
//   innertwo();
// }
// outter();

//clouser

// function CallMe(){
//     let name = "Kushal";
//     function sayMe(){
//         console.log(name);

//     }
//     return sayMe
// }
// const showMe = CallMe()
// showMe()

//getter and setter

// class User {
//     constructor(email, password){
//         this.email = email
//         this.password = password
//     }
//     get email(){
//         return this._email.toUpperCase()

//     }

//     set email(value){
//         this._email = value
//     }
// }

// const user = new User ("xyz123@gmail.com", "2389")
// console.log(user._email);

//functional get and set

// function User(email, age) {

//     Object.defineProperty(this, "email", {
//         get: function () {
//             return this._email.toUpperCase();
//         },
//         set: function (value) {
//             this._email = value;
//         },
//     });
//     this.email = email;
//     this.age = age;
// }

// const user1 = new User('kushal123@gmail.com', '22')
// console.log(user1)

//call

// function setUsername(username){
//     this.username = username.toUpperCase()
//     console.log("called");

// }

// function getUsername(username, email, password){
//     setUsername.call(this, username)
//     this.email = email
//     this.password = password

// }

// const showuser = new getUsername("kushal", "kushal@gmail.com", "12334")
// console.log(showuser.username);

//promises

// const promise_one = new Promise(function(resolve, reject){
//      setTimeout(function(){
//         console.log("Hello this is first promises")
//         resolve()

//      }, 1000)
// }).then(function(){
//     console.log("promise one is consumed")
// })

//array

// let arr = ["kushal"];

// console.log(Array.isArray(arra));
// console.log(arr instanceof Array);
// console.log(arr);

// const arra = Array.of(1, 2, 6, 7);
// console.log((Array.from([1,2,3],x=>x*2)));
// console.log((Array.from([1,2,3].map(x=>x*2))));

// let arrayONe = [];

// const num = arra.map((x) => {
//   if (x > 3) {
//     return x + 1;
//   }
//   return x;
// });
// console.log(num)

//filter
// const val = [1, 3, 6, 9, 12, 15, 18, 20, 40];

// let mulThree = [];

// const results = val.filter((num) => num % 3 === 0);

// const result = val.reduce((acc, curr)=> acc + curr, 1)
// console.log(result);

//reduce

// const fruits = ["Apple", "Mango", "Apple", "Orange", "Mango"]

// const count = fruits.reduce((acc, curr) =>{
// acc[curr] = (acc[curr] || 0 ) +1;
// return acc

// }, {})
// console.log(count);

// const user = [
//     {id : 1, name : "kushal"},
//     {id: 2, name : "Kaushal"},
// ]

// const print = user.reduce((acc, users) => {
//     acc[users.name] = users.id
//     return acc
// }, {})
// console.log(print)

// const Nums = [2,3,4,5,6,7,8,9,10,11,12]

// const sumOfEven = Nums.reduce((acc, Num)=>{
//     if(Num % 2 === 0) acc = acc+Num
//     return acc
// },0)
// console.log(sumOfEven);

// const Numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let sumOfArrr = 0
// Numbers.forEach((element) => {
//    sumOfArrr = sumOfArrr + element

// });
// console.log(sumOfArrr);

// const user = {
//   name: "kisor",
//   age: 20,
//   adderes: "Birtanagar",
// };

// for (const key in user) {
//   if (typeof user[key] === "string")
//     user[key] = user[key].replace("kisor", "kUshal");

//   // console.log(key, user[key] )
// }
// console.log(user);

// Object.entries(user).forEach(([key,value])=>
// {
//     if(typeof value === "string"){
//         user[key] = value.replace("kisor", "jansen")
//     }
// })
// console.log(user)

// const key = 2;
// switch (key) {
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("monday");
//     break;

//   default:
//     console.log("Noday");

//     break;
// }

// let charater = 2

// if (typeof charater === "string") {
//     console.log("This is a string");

// } else {
//     console.log("This is unknown");

// }

//while loop

// let num = 1

// while (num<50) {
//   num++
//   console.log(num);

// }

//do_while loop

// let n = 40;

// do {
// if(n%2 === 0){
//   console.log(n);

// }
//   n++;
// } while (n<=50);

//for loop

// for (let index = 0; index <= 10; index++) {
//   const element = index;
//   console.log(element);
// }

//Inheritance in javascript

// class Teacher{
//   constructor(username) {
//     this.username = username
//   }
//   signMe(){
//     console.log(`Teacher signMe: ${this.username}`);

//   }

// }

// class Student extends Teacher{
//   constructor(username, email, password){
//     super(username)
//     this.email = email
//     this.password = password
//   }
//   signOut(){
//     console.log(`student signout: ${this.username}`);

//   }
// }

// let user1 = new Student("niraj","niraj12@gmail.com", "12@#$")
// user1.signMe()


//strings

// let Name = "Nepal"

// console.log(Name.slice(0,4))
// console.log(Name.split(""))


// const num = {
//     a: 1,
//     b: 2,
//     sum(){
//         return this.a + this.b
//     }
    
// }
// const result = num.sum()
// console.log(result)

//