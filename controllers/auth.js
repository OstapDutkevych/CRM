const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const keys = require("../config/keys");

module.exports.loginUser = async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email });

  if (candidate) {
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      candidate.password
    );
    if (checkPassword) {
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate._id
        },
        keys.jwt,
        { expiresIn: 60 * 60 }
      );

      res.status(200).json({
        token: `Bearer ${token}`
      });
    } else {
      res.status(401).json({
        message: "wrong password, try again"
      });
    }
  } else {
    res.status(404).json({
      message: "User is not registered 404(Not Found)"
    });
  }
};

module.exports.registerUser = async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    res.status(409).json({
      message: "Email already exists, try another one"
    });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt)
    });
    try {
      await user.save();
      res.status(201).json(user);
    } catch (e) {
      console.log(e, "error in catch");
    }
  }
};
