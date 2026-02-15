function khanaBanana() {
    console.log("Khana banana start")
    setTimeout(() => {
        console.log("Khana banana end")
    }, 2000);
}

function sabziLaana(cb) { 
    console.log("Sabzi laana")
    setTimeout(() => {
        console.log("Sabzi le aaye")
        cb(); // Iske callback ko chala do
    }, 2000);
}

sabziLaana(khanaBanana); // khanaBanana is the callback function of sabzi laana