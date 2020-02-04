const User = require("../models/User");

module.exports.login = (req, res) => {
  res.status(200).json({
    login: {
      email: req.body.email,
      password: req.body.password
    }
  });
};

module.exports.register = async (req, res) => {
  // const user = new User({
  //   email: req.body.email,
  //   password: req.body.password
  // });
  // user.save().then(() => console.log("user created"));
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    res.status(409).json({
      message: "email already exists, try another one"
    });
  } else {
  }
};
