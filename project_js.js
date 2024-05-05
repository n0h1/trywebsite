

// script.js

// Function to validate form inputs
function validateForm() {
    // Get form inputs
    var mealName = document.getElementById('Mname').value;
    var mealPrice = document.getElementById('Mpri').value;
    var mealCalories = document.getElementById('Mcal').value;
    var mealDes = document.getElementById('Mdes').value;

    // Check for empty fields
    if (mealName === '' || mealPrice === '' || mealCalories === '') {
        alert('Please fill out all fields.');
        return false;
    }

    // Check if mealName starts with a number
    if (!isNaN(mealName.charAt(0))) {
        alert('Name field cannot start with a number.');
        return false;
    }

    // Check if mealPrice and mealCalories are numbers
    if (isNaN(mealPrice) || isNaN(mealCalories)) {
        alert('Price and calories must be numbers.');
        return false;
    }

    // If form is valid, proceed
    // Store meal information in local storage
    var meal = {
        name: mealName,
        price: mealPrice,
        calories: mealCalories,
        descript: mealDes
    };

    // Retrieve existing meals from local storage or initialize an empty array
    var existingMeals = JSON.parse(localStorage.getItem('meals')) || [];
    
    // Add new meal to the array
    existingMeals.push(meal);

    // Save updated array back to local storage
    localStorage.setItem('meals', JSON.stringify(existingMeals));

    // Display success message
    alert('New meal "' + mealName + '" added successfully.');

    // Clear the form
    document.getElementById('Mname').value = '';
    document.getElementById('Mpri').value = '';
    document.getElementById('Mcal').value = '';
    document.getElementById('Mdes').value = '';

    return true;
}

// Attach event listener to form submit button
document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.querySelector('.submit');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission
        validateForm(); // Call validateForm function
    });
});




