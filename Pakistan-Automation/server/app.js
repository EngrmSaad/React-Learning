const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const http = require("http");

const app = express();

global.__basedir = __dirname + "/";
//init middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use(cors());


//define routes
const insertContact = require("./routes/contact.routes");
const insertBookDemo = require("./routes/book-demo.routes");

app.use("/api/contact", insertContact);
app.use("/api/book-demo", insertBookDemo);


app.get("/api", (req, res) => res.send("Server Running"));
app.get("/", function (req, res, next) {
  res.send("Success");
});

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log("Server is running on: localhost:", PORT);
});
