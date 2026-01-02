// let myName = "Kushal     "
// let mychannel = "momo     "

// console.log(myName.trueLength);


let myHeros = ["qdk", "abd"]


let heroPower = {
    qdk: "pickup",
    abd: "swip",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.qdk}`);
    }
}

Object.prototype.pull = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.switchhit = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.pull()
// myHeros.pull()
// myHeros.switchhit()
// heroPower.switchhit()

// inheritance

const User = {
    name: "momo",
    email: "momo@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()