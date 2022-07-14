const tokenController = require("./../token/token");
const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const isAuthenticate = await tokenController.authenticateToken(
      token.split(" ")[1]
    );
    if (isAuthenticate) {
      req.user = isAuthenticate;
      next();
      return;
    }
    return res.status(401).send("Unauthorize");
  } catch (e) {
    return res.status(401).send("Unauthorize");
  }
};

module.exports = authenticate;
