const express = require("express");
const db = require("./config/db");
const postRouter = require("./routes/routerApi");
require("dotenv").config();

// NOTE: we use this way when using mysql package
// db.connect((err) => {
//   if (err) throw err;
//   console.log("Mysql Database ready to go !");
// });

const app = express();
const PORT = process.env.E_PORT | 5000;
app.use(express.json());

app.use("/blogs", postRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, process.env.E_LOCALHOST, (err) => {
  if (!err) {
    console.log(`Server is up and running at http://localhost:${PORT}`);
  } else {
    throw new Error(err);
  }
});
