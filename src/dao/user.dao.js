const { response } = require("express");
const User = require("./../model/User");

const getAllUserDetails = async (offset, limit) => {
  const response = await User.findAndCountAll({
    offset: offset,
    limit: limit,
    order: [["uid", "DESC"]],
  });

  if (response) {
    return response;
  }
  return [];
};

const getUserByUID = async (uid) => {
  const response = await User.findByPk(uid);
  if (response) {
    return response.toJSON();
  }
  return null;
};

const updateUser = async (updatedUser = {}, uid) => {
  const response = await User.findByPk(uid);
  if (response) {
    const user = response.toJSON();
    const updates = Object.keys(updatedUser);
    updates.forEach((key) => {
      user[key] = updatedUser[key];
    });
    const res = await User.update(user, { where: { uid } });
    return user;
  }
  return null;
};

const createUser = async (user) => {
  const createdUser = await User.create({ ...user });
  if (createdUser) {
    return createUser;
  }
  return null;
};

const getUserCount = async () => {
  let userCount = 0;
  let activeUser = 0;
  userCount = await User.count();
  activeUser = await User.count({ where: { inactive: "Yes" } });
  return { userCount, activeUser };
};

const userDao = {
  getAllUserDetails,
  getUserByUID,
  updateUser,
  createUser,
  getUserCount,
};

module.exports = userDao;
