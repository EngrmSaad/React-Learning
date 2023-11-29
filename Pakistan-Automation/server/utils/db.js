const mysql = require("mysql");

const pool = mysql.createPool({
  host: "s13.hosterpk.com",
  user: "digita87_muddassir",
  password: "Developers000$$$",
  database: "digita87_website",
  multipleStatements: true,
});

module.exports = pool;
