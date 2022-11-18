const { userModel } = require("../models");
var bcrypt = require("bcryptjs");

//registration logic
exports.createUser = async (req, res, next) => {
  const { password, email } = req.body;
  console.log(req.body)
  const encryptPassword = await bcrypt.hash(password, 10);

  try {
    const getUser = await userModel.findOne({ email: email });
    if (getUser) {
      return res.json({ success: false, massage: "User already exists" });
    }

    const user = await userModel.create({
     
      email,
      password: encryptPassword,
    });

    res.json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
// login users logic
exports.getUser = async (req, res, next) => {
  const { password, email } = req.query;
  

  try {
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.json({ success: false, massage: "User Not Found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      return res.json({ success: true, massage: "login successfully" });
    }
    res.json({
      success: false,
      massage: "Invalid password",
      suggestion: "please give a valid password",
    });
  } catch (error) {}
};
