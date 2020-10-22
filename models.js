const cars = [
  {
    color: "Black",
    plate: "37-29188",
    type: "Toyota",
    engine: "2500cc",
    model: "Camry",
    year: "2014",
  },
  {
    color: "Red",
    plate: "21-23332",
    type: "Mercedes",
    engine: "4500cc",
    model: "CLA",
    year: "2018",
  },
  {
    color: "Silver",
    plate: "33-11283",
    type: "Ford",
    engine: "2000cc",
    model: "Fusion",
    year: "2019",
  },
  {
    color: "Metallic black",
    plate: "14-44323",
    type: "Chevrollet",
    engine: "5000cc",
    model: "Camaro",
    year: "2020",
  },
];
const users = [
  {
    email: "user1@gmail.com",
    role_id: "user",
    password: "$2b$10$BEmio0.hNtEc4Dv8mO8.aOnM8.3ImNtbf92PdUJGwR2lHRlmZuoM.",
  },
  {
    email: "user2@gmail.com",
    role_id: "admin",
    password: "$2b$10$wdXomzkTrehHBrxfOviJjei2Z4kdhmcB1xMck7zDbDVSLlFcSkiH.",
  },
  {
    email: "user3@gmail.com",
    role_id: "user",
    password: "$2b$10$bJUpmL4Bi9sBfoovfqbUkuUkwU36rBCJtxmb8ZM1sYwkNaGJuf8E.",
  },
];
const roles = [
  { id: "user", permessions: ["r", "w"] },
  { id: "admin", permessions: ["r", "w", "d", "u"] },
];
module.exports = { cars, users, roles };
