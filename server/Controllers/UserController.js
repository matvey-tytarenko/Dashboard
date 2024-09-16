const user = require("../Model/UserModel");
const bcrypt = require("bcrypt");
const {
  generateVerificationCode,
} = require("../utils/generateVerificationCode");

module.exports.login = async (req, res) => {};
module.exports.signup = async (req, res) => {
  const { login, email, password } = req.body;

  try {
    if (!email || !password || !login) {
      throw new Error("All fields are required");
    }

    const UserAlreadyExist = await user.findOne({ email });
    if (UserAlreadyExist) {
      return res.status(400).json({
        status: false,
        success: false,
        message: "User already exists!",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const VerificationCode = generateVerificationCode();

    const User = new user({
      email,
      password: hashedPassword,
      login,
      verificationToken: VerificationCode,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    await User.save();

    // JWT
    SetCookie(res, User:_id)
  } catch (error) {
    res.status(400).json({ status: false, success: false, message: error });
  }
};
module.exports.logout = async (req, res) => {};
