const loginDao = require("./../dao/login-dao");
const token = require("./../token/token");

const findByUsernameAndPassword = async (req, res) => {
  try {
    const username = req.params.username;
    const password = req.params.password;

    if (username && password) {
      const resp = await loginDao.findByUsername(username, password);

      if (!resp) {
        return res.status(404).send("User Not Found");
      }
      const generatedToken = token.generateAccessToken(username);

      return res.send({ username: resp.username, token: generatedToken });
    }

    return res.status(400);
  } catch (ex) {
    return res.status(500).send(ex);
  }
};

const createUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
      await loginDao.createUser(username, password);
      return res.send();
    }
    return res.status(400).send();
  } catch (ex) {
    return res.status(500).send(ex);
  }
};

const loginController = {
  findByUsernameAndPassword,
  createUser,
};

module.exports = loginController;
