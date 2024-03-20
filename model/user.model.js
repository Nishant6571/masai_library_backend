const mongoose = require("mongoose");

// userSchema
const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    isAdmin: { type: Boolean },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = { UserModel };
