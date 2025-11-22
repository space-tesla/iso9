const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ 
      status: "error", 
      message: "Name and age are required" 
    });
  }

  if (isNaN(age)) {
    return res.status(400).json({ 
      status: "error", 
      message: "Age must be a number" 
    });
  }

  res.json({
    status: "success",
    message: "Data received",
    data: { name, age }
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});



// HOW TO RUN THIS PROGRAM:

// REQUIRED SETUP (Run these once if not already done):
// npm init -y
// npm install express
// npm install

// HOW TO RUN THIS APPLICATION:
// Step 1: Open terminal inside this folder
// Step 2: Run → node app.js
// Step 3: Use curl command from another terminal to test:

// Open New Terminal and go to file using cd filename 
// Example curl command:
// curl -X POST -H "Content-Type: application/json" -d '{"name":"Vaibhav","age":22}' http://localhost:3000/submit
