// Immediately Invoked Function Expression
// (function)()

let studentData = (function () {
    let marks = 80;
    let firstName = "Tarun";
    let lastName = "Jayswal";

    function updateFirstName(name) {
        firstName = name
    }

    function updateLastName(name) {
        lastName = name;
    }

    function printDetails() {
        console.log("Name", firstName, lastName);
        console.log("Marks", marks);
    }

    return {
        updateFirstName,
        updateLastName,
        printDetails
    }
})()

studentData.updateFirstName("TAARUN");
studentData.printDetails();