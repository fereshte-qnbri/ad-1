/*
1- Write code to import and log the contents of a JSON file named data.json.

2- Implement a function named login that accepts two parameters, username and password. Inside this function, search the imported JSON data for a user object where both the username and password match the provided arguments.

3- Modify the login function to return the matched user object if the credentials are correct. If no match is found, return a message indicating "email or password incorrect."

4- Write code to access the username and password from the command-line arguments passed when running the script.
hint: process.argv

5- Use the command-line arguments as inputs to the login function and log the result to the console.
*/


const fs = require('fs');

try {
  const data = fs.readFileSync('data.json', 'utf8');
  const users = JSON.parse(data);
  console.log("JSON Data:", users); 
} catch (err) {
  console.error("Error reading or parsing data.json:", err);
  process.exit(1); 
}

function login(username, password) {
  if (!users) {
    return "No user data available."; 
  }
  for (const user of users) {
    if (user.username === username && user.password === password) {
      return user;
    }
  }
  return "email or password incorrect";
}

const args = process.argv.slice(2); 
if (args.length !== 2) {
  console.error("Usage: node script.js <username> <password>");
  process.exit(1); 
}

const username = args[0];
const password = args[1];

const result = login(username, password);
console.log("Login Result:", result);
