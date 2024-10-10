
// Function to check if the date falls between September 9th and September 21st
function checkDate(dateStr) {
    const date = new Date(dateStr);

    // Defining the start and end dates for validation
    const startDate = new Date(date.getFullYear(), 8, 9);  // September 9th (month is 0-indexed)
    const endDate = new Date(date.getFullYear(), 8, 21);   // September 21st

    // Check if the date is after September 9th (exclusive) and on or before September 21st (inclusive)
    return date > startDate && date <= endDate;
}

function checkName(nameString){

    // Regular expression to match any special character (anything that's not a letter or number)
    const specialCharPattern = /[^a-zA-Z0-9]/;

    // Test the name and return true if it DOES NOT contain special characters, otherwise false
    return !specialCharPattern.test(nameString);
}

module.exports = { checkDate, checkName};
