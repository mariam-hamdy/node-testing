//closures, I can return another fuction as I can parse a function as 
// argument to another function which is callbacks
function adding (first) {
    return function (second) {
        return first + second;
    }
}

function foo(x) {
    let y=10;
    return x+y+11;
}

function bar(n) {
    let z=3;
    return foo(n*z);
} //that one is work it is not closure
function closureFunction(n) {
    let z = 3;
    let x = n*z;
    //closures is very very different there arent the same x anymore
    return function(x) {
        let y=10;
        return y+ 11+ x;
    }
}

let baz = closureFunction(7);
let total =baz();
console.log(baz);
console.log(typeof baz)
console.log(total)

/*let addingResult = adding(50);
console.log(addingResult)
let result = addingResult(50);
console.log(result);*/