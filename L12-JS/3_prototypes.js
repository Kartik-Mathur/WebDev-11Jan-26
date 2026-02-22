function Person(){
    console.log("I am a person");
}

Person.prototype = Object.create(Object.prototype);

