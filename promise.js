const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Operation succeeded!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});
myPromise.then((item)=>{
    console.log(item)
})
.catch((error)=>{
    console.log(error)
})