const userDao = require("./../dao/user.dao");

const findAllUsers = async (req, res) => {
  try {
    let { page, size } = req.query;
    // If the page is not applied in query.
    if (!page) {
      // Make the Default value one.
      page = 1;
    }
    if (!size) {
      size = 10;
    }

    //  We have to make it integer because
    // query parameter passed is string
    const limit = parseInt(size);
    const offset = +page * limit;
    const response = await userDao.getAllUserDetails(offset, limit);
    return res.send(response);
  } catch (ex) {
    return res.status(500).send(ex);
  }
};

const findUserByUID = async (req, res) => {
  try {
    const uid = req.params.uid;
    if (uid) {
      const response = await userDao.getUserByUID(uid);
      if (response) {
        return res.send(response);
      }
    }
    return res.status(404).send("UID not found");
  } catch (ex) {
    res.status(500).send(ex);
  }
};

const updateUser = async (req, res) => {
  try {
    const updateUser = req.body;
    if (req.params.uid) {
      const response = await userDao.updateUser(updateUser, req.params.uid);
      if (response) {
        return res.send(response);
      }
    }
    return res.status(401).send("Bad request");
  } catch (ex) {
    return res.status(500).send(ex);
  }
};

const createUser = async (req, res) => {
  try {
    const createdUser = await userDao.createUser(req.body);
    if (createdUser) {
      return res.send({ success: true });
    }
    return res.status(400).send();
  } catch (ex) {
    return res.status(500).send(ex);
  }
};

const getUserCounts = async (req, res) => {
  try {
    const counts = await userDao.getUserCount();
    return res.send(counts);
  } catch (ex) {
    return res.status(500).send(ex);
  }
};

const userController = {
  findAllUsers,
  findUserByUID,
  updateUser,
  createUser,
  getUserCounts,
};

module.exports = userController;
