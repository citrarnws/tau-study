function sum(a,b) {
    return a/b;
}

console.log(sum(10,10));

function product(a,b) {
    return a*b;
}

console.log(product(12, 9));

const bigProduct = product(12345, 57689);
console.log(bigProduct);

setTimeout(function () {
    console.log("Hey you are awesome poll!");
}, 1000);

setTimeout(() => console.log("Hey kamu keceh bre!"), 1000);