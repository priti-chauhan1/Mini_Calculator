// Clear all content from the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Remove the last digit from the display
function deleteDigit() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1); // Remove last character
}

// Append a value to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value; // Add the value to the current display content
}

// Calculate the result and display it
function calculateResult() {
    let display = document.getElementById("display").value; // Get the current display value
    try {
        // Evaluate the expression and round the result to 2 decimal places
        let result = eval(display); 
        document.getElementById("display").value = Math.round(result * 100) / 100;
    } catch (error) {
        // Display an error message if the calculation fails
        document.getElementById("display").value = "Error";
    }
}
