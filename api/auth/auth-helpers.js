const User = require("./auth-model");
module.exports = {
  validateAuthBody,
};

async function validateAuthBody(req, res, next) {
  try {
    if (!req.body.username || req.body.username.length < 4) {
      return res.status(400).json({
        error: "Please provide a username with at least 4 characters",
      });
    }
    if (!req.body.fullname) {
      return res.status(400).json({
        error: "Please provide a name",
      });
    }
    if (!req.body.password || req.body.password.length < 8) {
      return res.status(400).json({
        error: "Please provide a password with at least 8 characters",
      });
    }
    const user = await User.findBy({
      username: req.body.username.toLowerCase(),
    });
    if (user.length) {
      return res
        .status(400)
        .json({ error: "User with this username already exist" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: "Server Error" });
  }
}
