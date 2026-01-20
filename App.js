// Prompt the user to enter their full Name. Generate a userName for them based on the input.
// Start username with @, followed by their full name and ending with the full name length.
// e.g userName = "Fida ur Rahman", user name should be = "@fidaurRahman123".
let FullName = prompt("Enter you Name without spaces");
let username = "@" + FullName + FullName.length;
console.log(username);


