const availableGenres  = ["Fiction", "Science", "History", "Biography"];

function collectUserData(){
    //username
    let userName = prompt("What is your name?");

    //membership type
    let membershipType = prompt("Enter your membership type: Student or Regular");
    if (membershipType.toLowerCase() == "student"){
        alert("Welcome, " + userName + "! You joined as Scholar");
    }
    else if (membershipType.toLowerCase() == "regular"){
            alert("Welcome, " + userName + "! You joined as Member");
    }
    else{
        membershipType = askForMembership();
        //  alert("Welcome, " + userName + "!");
        return membershipType.toLowerCase;
    }

    //book genre
    let bookGenre = prompt("Do you prefer fiction or non-fiction?");

    //booktitle
    let bookTitle = prompt("What is the title of the book you look to borrow?");
    let userData = [userName, membershipType, bookGenre, bookTitle];
    return userData;
}

function askForMembership(){

    let membershipType = prompt("The membership type must be either: Student or Regular");
    while (membershipType.toLowerCase() != "student" &&
           membershipType.toLowerCase() != "regular" ){
        membershipType = prompt("The membership type must be either: Student or Regular !");
    }
    
    return membershipType.toLowerCase();
}

function applyDiscount(userData) {
    if(userData[1] == "student"){
        userData.push("20% Discount ")
    }
    else {
        userData.push("No Discount");
    }
    return userData;
}

function addNewGenre(genre) {
    availableGenres.push(genre);
}


// alert("Alright sir the book '" + bookTitle + "' is being reserved for you!");
// console.log("The user " + userName + " has ordered the book: " + bookTitle);

const order = collectUserData();
for (let i = 0; i <=3; i++){
    console.log(order[i]);
}

addNewGenre("Fantasy");
console.log(availableGenres);