const jwt = require("jsonwebtoken");
const loginDao = require("./../dao/login-dao");

const generateAccessToken = (username) => {
  const token = jwt.sign(username, "KEY");
  return token;
};

const authenticateToken = async (token) => {
  return jwt.verify(token, "KEY", async (err, userId) => {
    if (err) throw "Unauthorized";
    if (userId) {
      const isUserPresent = await loginDao.findUserByEmailId(userId);
      if (isUserPresent) {
        return userId;
      }
    }
    return false;
  });
};

const tokenGenerator = {
  generateAccessToken,
  authenticateToken,
};

module.exports = tokenGenerator;
