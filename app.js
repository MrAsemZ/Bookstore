const availableGenres  = ["Fiction", "Science", "History", "Biography"];



// Checks membership is "student" or "regular", returns null if invalid
function validateMembership(type) {
    const t = type.trim().toLowerCase();
    return (t === "student" || t === "regular") ? t : null;
}

// Adds a discount field based on membership type
function applyDiscount(userData) {
    if (userData[1] === "student") {
        userData.push("20% Discount");
    } else {
        userData.push("No Discount");
    }
    return userData;
}

const bookstoreForm = document.getElementById("bookstore-form");
if (bookstoreForm) {
    bookstoreForm.addEventListener("submit", handleBookstoreSubmit);
}
//new collectUserData()
function handleBookstoreSubmit(event) {
    event.preventDefault(); // stops the page from reloading on submit

    const userName = document.getElementById("username").value.trim();
    const membershipInput = document.getElementById("membership").value;
    const bookGenre = document.getElementById("genre").value.trim();
    const bookTitle = document.getElementById("title").value.trim();

    const membershipType = validateMembership(membershipInput);
    if (!membershipType) {
        alert("Membership type must be Student or Regular.");
        return;
    }

    let userData = [userName, membershipType, bookGenre, bookTitle];
    userData = applyDiscount(userData);

    renderResult(userData);
    addNewGenre(bookGenre);
}

// Add a new genre to the array
function addNewGenre(genre) {
    // Check if the user entered a genre that already exists
    if (genre && !availableGenres.includes(genre)) {
            // ! means NOT included in the array
        availableGenres.push(genre);
    }
}

// Loops through the userData array and renders it into #result-card
function renderResult(userData) {
    const resultCard = document.getElementById("result-card");
    resultCard.innerHTML = "";
 
    const labels = ["Name", "Membership", "Genre", "Book Title", "Discount"];
    const list = document.createElement("ul");
 
    for (let i = 0; i < userData.length; i++) {
        const item = document.createElement("li");
        item.textContent = labels[i] + ": " + userData[i];
        list.appendChild(item);
    }
 
    resultCard.appendChild(list);
}
