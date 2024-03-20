const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/users.model");

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (token) {
    try {
      const decoded = jwt.verify(token, "nishant");
      console.log(decoded);
      const { userID } = decoded;
      const user = await UserModel.findOne({ _id: userID });
      if (user && user.isAdmin) {
        req.isAdmin = true;
        next();
      } else {
        res.status(403).json({ msg: "Forbidden - Admin access required" });
      }
    } catch (err) {
      res.status(400).json({ msg: "Invalid token" });
      console.error(err);
    }
  } else {
    res.status(401).json({ msg: "Unauthorized - Please provide a token" });
  }
};

module.exports = { isAuth };
