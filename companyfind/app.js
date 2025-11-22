const companies = [
  { id: 1, name: "Google", workforce: 25 },
  { id: 2, name: "Microsoft", workforce: 55 },
  { id: 3, name: "Infosys", workforce: 18 },
  { id: 4, name: "TCS", workforce: 45 }
];

const ids = companies
  .filter(c => c.workforce > 30)
  .map(c => c.id);

const result = ids.map(id => companies.find(c => c.id === id));

console.log(result);


// HOW TO RUN THIS APPLICATION:
// Step 1: Open terminal inside this folder
// Step 2: Run → node app.js
