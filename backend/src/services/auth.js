const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const models = require("../models");

const hashinOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2.hash(req.body.password, hashinOptions).then((hashedPassword) => {
    req.body.password = hashedPassword;
    next();
  });
};

const login = (req, res) => {
  const { name, pseudo, birthdate, gender, email, password } = req.body;
  models.user.findPasswordByEmail(email).then(([rows]) => {
    const user = rows[0];
    if (user) {
      const hashedPassword = user.password;

      argon2.verify(hashedPassword, password, hashinOptions).then((ok) => {
        if (ok) {
          const token = jwt.sign(
            { name, pseudo, birthdate, gender, email },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
          res.json({ token });
        } else {
          res.sendStatus(403);
        }
      });
    }
  });
};

module.exports = {
  hashPassword,
  login,
};
