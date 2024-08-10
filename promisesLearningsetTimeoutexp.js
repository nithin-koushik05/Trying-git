function getPromisechain1() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            console.log("some data1");
            resolve("resolve");
        },3000);
    });
}

function getPromisechain2() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            console.log("some data2");
            resolve("resolve");
        },3000);
    });
}

console.log("fetching data1");
let p1 = getPromisechain1();
p1.then((res) => {
    console.log("Success");
    console.log("fetching data2");
    let p2 = getPromisechain2();
    p2.then((res) => {
        console.log("Success");
        })

});