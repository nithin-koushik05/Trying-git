// simple example to demonstrate .then & .catch in promises
let getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Hello!");
        resolve("success");
        //reject("error");
    })
}

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled:",res)
});

promise.catch((err) => {
    console.log("Error occured:",err);

});

