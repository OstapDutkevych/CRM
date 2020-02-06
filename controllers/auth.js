const User = require("../models/User");

module.exports.loginUser = (req, res) => {
  res.status(200).json({
    login: {
      email: req.body.email,
      password: req.body.password
    }
  });
};

module.exports.registerUser = async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    res.status(409).json({
      message: "Email already exists, try another one"
    });
  } else {
    const user = new User({
      email: req.body.email,
      password: req.body.password
    });
    try {
      await user.save();
      res.status(201).json(user);
    } catch (e) {
      console.log(e, "error in catch");
    }
  }
};
