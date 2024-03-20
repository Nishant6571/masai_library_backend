const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./route/user.route");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api", userRouter);

// route to check the connection
app.get("/", (req, res) => {
  try {
    res.status(200).send("This is our Homepage.");
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});

// launching the app
app.listen(process.env.PORT, async () => {
  await connection;
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});