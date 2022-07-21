function add(...args) {
    let sum=0;
    for(let item of args) {
        sum+=item
    }
    return sum;
}
let obj1 = {foo: 'bar', x: 23}
let obj2 = {foo: 'baz', y:15}

let copiedByValue = {...obj1}  //by value

let merged = {...obj1, ...obj2}
console.log(copiedByValue)
console.log(merged)

//let array=['name',2,3,4,5]
//let obj = {...array}

//let total = add(...[1,2,3,4,5]);



/*let string = JSON.stringify(obj1);
let copied =JSON.parse(string);
console.log(obj1)
console.log(copied)
console.log('break')
copied = {foo:'mariam', x: 1222}
console.log(obj1)
console.log(copied)
console.log('break')

let copiedByReference = obj1
console.log(obj1)
console.log(copied)
console.log(copied === obj1? 'true': 'false')
copied.foo= 'mariam'
console.log(obj1)
console.log(copied)s
*/