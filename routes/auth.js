const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

////////////Register//////////////

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

////////////Login//////////////

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).json("Wrong username or password!!");
    } else {
      const validate = await bcrypt.compare(req.body.password, user.password);
      if (!validate) {
        res.status(401).json("Wrong username or Password!!");
      } else {
        const { password, ...other } = user._doc;
        res.status(200).json(other);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
