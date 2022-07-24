/*console.log('this is the start') //first
setTimeout(()=>console.log('hello from callback1'),0) //fourth
console.log('this is the middle') //second
setTimeout(()=>console.log('hello from callback2'),0) //fifth
console.log('this is the end') //third*/
function doSomething () {
    console.log(this);
}
const obj = {
    name: 'mariam',
    age: 25,
    getName: function() {
        console.log(this);
        console.log(this.name);
    }
}

let obj2 = {
    name: 'ibrahim',
    age: 23
}
obj.getName.call(obj2);
console.log('break')
obj.getName.apply(obj2);  /**zay call bzbt bs el far2 anha bta5od 
elborrowed function argument as arrayof string not string only */
console.log('break')
let borrowedFunc = obj.getName.bind(obj2);  //same also but it returns the borrowed function

borrowedFunc()