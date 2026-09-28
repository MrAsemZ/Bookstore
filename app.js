const availableGenres = ["Fiction", "Science", "History", "Biography"];

// Checks if membership is "student" or "regular"
function validateMembership(type) {
    const t = type.trim().toLowerCase();

    if (t === "student" || t === "regular") {
        return t;
    }

    return null;
}

// Adds a discount based on membership type
function applyDiscount(userData) {

    if (userData[1] === "student") {
        userData.push("20% Discount");
    } else {
        userData.push("No Discount");
    }

    return userData;
}

// Get the form
const bookstoreForm = document.getElementById("bookstore-form");

// Listen for form submission
bookstoreForm.addEventListener("submit", handleBookstoreSubmit);

// Handles the form submission
function handleBookstoreSubmit(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the inputs
    const username = document.getElementById("username");
    const membership = document.getElementById("membership");
    const genre = document.getElementById("genre");
    const title = document.getElementById("title");

    // Get the error spans
    const usernameError = document.getElementById("usernameError");
    const membershipError = document.getElementById("membershipError");
    const genreError = document.getElementById("genreError");
    const titleError = document.getElementById("titleError");

    // Used to check if any input is empty
    let hasError = false;

    // Username Required
    if (username.value.trim() === "") {
        usernameError.textContent = "Required";
        hasError = true;
    } else {
        usernameError.textContent = "";
    }

    // Membership Required
    if (membership.value.trim() === "") {
        membershipError.textContent = "Required";
        hasError = true;
    } else {
        membershipError.textContent = "";
    }

    // Genre Required
    if (genre.value.trim() === "") {
        genreError.textContent = "Required";
        hasError = true;
    } else {
        genreError.textContent = "";
    }

    // Title Required
    if (title.value.trim() === "") {
        titleError.textContent = "Required";
        hasError = true;
    } else {
        titleError.textContent = "";
    }

    // Stop here if any input is empty
    if (hasError === true) {
        return;
    }

    // Get the values from the inputs
    const userName = username.value.trim();
    const membershipInput = membership.value;
    const bookGenre = genre.value.trim();
    const bookTitle = title.value.trim();

    // Validate membership
    const membershipType = validateMembership(membershipInput);

    if (!membershipType) {
        document.getElementById("form-error").textContent =
            "Membership type must be Student or Regular.";

        return;
    }

    // Clear membership error
    document.getElementById("form-error").textContent = "";

    // Store the user's information in an array
    let userData = [
        userName,
        membershipType,
        bookGenre,
        bookTitle
    ];

    // Add discount
    userData = applyDiscount(userData);

    // Display the information on the page
    renderResult(userData);

    // Add new genre if necessary
    addNewGenre(bookGenre);
}

// Add a new genre to the array
function addNewGenre(genre) {

    if (genre && !availableGenres.includes(genre)) {
        availableGenres.push(genre);
    }
}

// Display the user's information on the page
function renderResult(userData) {

    const resultCard = document.getElementById("result-card");

    // Clear previous result
    resultCard.innerHTML = "";


    const labels = [
        "Name",
        "Membership",
        "Genre",
        "Book Title",
        "Discount"
    ];

    // Create a list
    const list = document.createElement("ul");

    // Go through the userData array
    for (let i = 0; i < userData.length; i++) {

        // Create a list item
        const item = document.createElement("li");

        // Put the information inside the list item
        item.textContent = labels[i] + ": " + userData[i];

        // Add the item to the list
        list.appendChild(item);
    }

    // Put the list inside the result card
    resultCard.appendChild(list);
}