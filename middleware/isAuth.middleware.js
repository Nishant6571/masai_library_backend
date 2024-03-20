const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.model");

const isAuth = async (req, res, next) => {
  const access_token = req.headers.authorization?.split(" ")[1];
  if (!access_token) {
    return res.status(401).send({ msg: "Unauthorized, no token provided" });
  }

  try {
    const decoded = jwt.verify(access_token, "nishant");
    if (!decoded) {
      return res.status(403).send({ msg: "Unauthorized, token is invalid" });
    }

    const user = await UserModel.findById({ _id: decoded.userID });
    if (!user || !user.isAdmin) {
      return res
        .status(403)
        .send({ msg: "Unauthorized, only admins can perform this action" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = {
  isAuth,
};
