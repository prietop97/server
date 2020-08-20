const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("./auth-model");
const { validateAuthBody } = require("./auth-helpers");

router.post("/register", validateAuthBody, (req, res) => {
  let user = req.body;
  user.username = user.username.toLowerCase();
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  Users.add(user)
    .then((saved) => {
      const token = getJwtToken(saved);
      console.log(saved);
      res.status(201).json({
        user_id: saved.id,
        fullname: saved.fullname,
        username: saved.username,
        token,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Unable to insert user to database" });
    });
});

router.post("/login", (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res
      .status(400)
      .json({ error: "Please provide username and password" });
  }
  req.body.username = req.body.username.toLowerCase();
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // produce a token
        const token = getJwtToken(user);

        //send the token to the client
        res.status(200).json({
          user_id: user.id,
          fullname: user.fullname,
          username: user.username,
          token,
        });
      } else {
        res.status(401).json({ error: "Invalid Credentials" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Unable to retrieve user from database" });
    });
});

function getJwtToken(user) {
  console.log("getJWtToken", user);
  const payload = {
    user,
  };

  const secret = process.env.JWT_SECRET || "is it secret";

  const options = {
    expiresIn: "8hr",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
