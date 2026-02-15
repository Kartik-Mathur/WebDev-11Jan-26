function Download(cb) {
    console.log("Download starts")
    setTimeout(() => {
        console.log("Download ends")
        cb();

    }, 2000);
}

function Compression(cb) {
    console.log("Compression starts")
    setTimeout(() => {
        console.log("Compression ends")
        cb();
    }, 2000);
}

function Uploading(cb) {
    console.log("Uploading starts")
    setTimeout(() => {
        console.log("Uploading ends")
        cb()
    }, 2000);
}

// NESTING OF CALLBACKS IS CALLED AS CALLBACK-HELL
Download(function () {
    Compression(function () {
        Uploading(function () {
            console.log("All Done");
        })
    })
})