export const getProfile = (model) => async (req, res) => {
  const { email, password } = req.query;

  const user = await model.getUser(email, password);

  if (!user) {
    return res.status(404).send({ message: "User doesn't existe" });
  }

  res.send({ results: [user] });
};

export const getAllUsers = (model) => async (req, res) => {
  const user = await model.getUsers();

  if (!user) {
    return res.status(404).send({ message: "No users" });
  }

  res.send({ results: [user] });
};

export const createNewUser = (model) => async (req, res) => {
  const { data } = req.body;
  const userId = await model.createUser(data);

  if (!userId) {
    return res.status(404).send({ message: "Something went wrong..." });
  }

  res.send({ results: [userId] });
};

export const getUserById = (model) => async (req, res) => {
  const { id } = req.query;

  const user = await model.getUserById(id);

  if (!user) {
    return res.status(404).send({ message: "User doesn't existe" });
  }

  res.send({ results: [user] });
};

export const removeUser = (model) => async (req, res) => {
  const { id } = req.query;

  const userId = await model.removeUserById(id);

  if (!userId) {
    return res.status(400).send({ message: "User has not been deleted..." });
  }

  res.send({ results: [userId] });
};
