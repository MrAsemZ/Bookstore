let userName = prompt("What is your name?");
let membership = prompt("Enter your membership type: Student or Regular");

if (membership.toLowerCase() == "student"){
    alert("Welcome, " + userName + "! You joined as Scholar");
}
else if (membership.toLocaleLowerCase() == "regular"){
        alert("Welcome, " + userName + "! You joined as Member");
}
else{
     alert("Welcome, " + userName + "!");
}

let genre = prompt("Do you prefer fiction or non-fiction?");

let bookTitle = prompt("What is the title of the book you look to borrow?");

alert("Alright sir the book '" + bookTitle + "' is being reserved for you!");

console.log("The user " + userName + "has ordered the book: " + bookTitle);