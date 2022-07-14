const Login = require("./../model/Login");
const bcrypt = require("bcrypt");

const findByUsername = async (username, password) => {
  const userData = await Login.findByPk(username);
  if (userData) {
    const user = userData.toJSON();
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      return user;
    }
    throw "Invalid Password";
  }
  throw "user not exists";
};

const createUser = async (username, password) => {
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);
  await Login.create({
    username: username,
    password: hashedPassword,
  });
};

const findUserByEmailId = async (email) => {
  const user = await Login.findByPk(email);
  if (user) {
    return user.toJSON();
  }
  throw "user not found";
};

const LoginDao = {
  findByUsername,
  createUser,
  findUserByEmailId,
};

module.exports = LoginDao;
