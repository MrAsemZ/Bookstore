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