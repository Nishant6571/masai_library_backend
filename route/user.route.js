const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.model");
const userRouter = express.Router();

// New User Registration Route
userRouter.post("/register", (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  try {
    bcrypt.hash(password, 6, async (err, hash) => {
      if (err) {
        res.status(400).json({ error: err });
      } else {
        const newUser = new UserModel({ name, email, password: hash, isAdmin });
        await newUser.save();
        console.log(newUser);
        res
          .status(201)
          .json({ msg: "Hey! user You are successfully Registered." });
      }
    });
  } catch (err) {
    res.status(400).send({ msg: "Bad Request", err });
  }
});

// User Login Route
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const access_token = jwt.sign({ userID: user._id }, "nishant", {
            expiresIn: "1d",
          });
          res
            .status(201)
            .json({
              msg: "Hey! user You are Logged in Successfully.",
              access_token,
            });
        } else {
          res
            .status(200)
            .json({ msg: "Please register first, wrong Credential" });
        }
      });
    } else {
      res.status(200).json({ msg: "Please register first, wrong Credential" });
    }
  } catch (err) {
    res.status(400).send({ msg: "Bad Request", err });
  }
});

module.exports = { userRouter };
