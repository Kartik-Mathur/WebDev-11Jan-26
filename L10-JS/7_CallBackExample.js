function sum(a, b, cb) {
    setTimeout(()=>{
        cb(a+b)
    }, 2000);
}


sum(10, 20, function (ans) {
    console.log("Ans",ans);
});