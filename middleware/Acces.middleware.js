// const Access = async (req, res, next) => {
//   try {
//     const user = req.user;
//     if (user.isAdmin) {
//       next();
//     } else {
//       res.status(400).send({ msg: "User not Authorised." });
//     }
//   } catch (error) {
//     res.status(400).send({ error });
//   }
// };

// module.exports = { Access };
