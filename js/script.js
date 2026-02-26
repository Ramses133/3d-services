// JavaScript functionality for the website

function displayCurrentDateTime() {
    const now = new Date();
    const utcDateTime = now.toUTCString();
    console.log(`Current Date and Time (UTC): ${utcDateTime}`);
}

displayCurrentDateTime();