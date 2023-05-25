const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.isAuthenticatedUser = async(req, res, next) => {
  const { token } = req.cookies;

  if(!token) return res.status(401).json({ msg: "Please Login to access the resource"});

  const decodedData = jwt.verify(token, "secretkey");

  req.user = await User.findById(decodedData.id);
  // next();
}