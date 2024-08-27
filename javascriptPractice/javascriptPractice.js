// let n = "navida"
//     n = 4
//     //console.log(typeof(n))

//     const obj = { 

//         n : "namevalue",
//         b : 4,
//         c: true
//     }
// //console.log(obj.n)
// let p = {
//     run: () => {
//         console.log("self")
//     }
// }

// class Room {
//     constructor(type, size, hasWindows, equipment) {
//         this.type = type;
//         this.size = size;
//         this.hasWindows = hasWindows;
//         //    this.equipment  = ['esterillas', ...equipment];
//     }
// }

// class PilatesRoom extends Room {

//     constructor(type, size, hasWindows, equipment) {
//         super(type, size, hasWindows, equipment)
//     }

//     test1(a, b) {
//         this.type = a;
//         this.size = b;
//         console.log(this.type + " and " + this.size + " are the values")
//     }

// }

// const room1 = new PilatesRoom('pilates', 20, true, ['balón medicinal'])
// const room2 = new PilatesRoom()

// console.log(room1);
// room2.test1(1, 2);
// console.log(room2);

//string var later hold int
// let name2 = "navida"
// console.log(typeof(name2))
// name2 = 2
// console.log(name2)

//const var cannot change its value
const name3 = {
    fname: "abc",
    age : 16,
    height : 6.2
}

name3.age=17
console.log(name3.age)