// const express = require("express");
// const app = express();

// app.get("/greet/:name", (req, res) => {
//   res.send("Welcome to SALT, " + req.params.name);
// });

// app.listen(3000);
// console.log(`Open http://localhost:3000/greet/Odin`);

export function getAge(birthYear, currentYear) {
  return currentYear - birthYear;
}

const age = getAge(1972, 2022);
console.log("The age constant is: " + age);
