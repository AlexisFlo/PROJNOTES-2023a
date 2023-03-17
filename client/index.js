console.log("🎉 Client Server working powered by webpack")

// ES6 CODE
// Default Parameters
let show = (msg="No message given") => {
    console.log(msg)
}

show();

// ES6 CODE
// Async Await
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('reslved');
        }, 2000)
    });
}

async function asyncCall() {
    console.log("Calling");
    const result = await resolveAfter2Seconds();
    console.log(result); 
}

asyncCall();