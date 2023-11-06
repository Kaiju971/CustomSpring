import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { ENCRYPTION_KEY, AUTH_TOKEN_KEY } = process.env;

export const login = (model) => async (req, res) => {
  const { email, password } = req.body.data;

  try {
    // Check if user exist AND password supplied is correct

    const id = "";
    const user = await model.getUserBy(id, email);
    console.log(user);
    if (!user) {
      return res.status(404).send({ message: "id inconnu" });
    }

    const userExists = !!user;
    const passwordCorrect =
      userExists && (await bcrypt.compare(password, user.password));

    if (passwordCorrect) {
      const jwtOptions = {
        expiresIn: "24h", // Expire token in 24 hours
      };

      const authToken = jwt.sign(user, AUTH_TOKEN_KEY, jwtOptions);

      return res.status(200).json({
        success: true,
        user: {
          user_id: user.id,
          email: user.email,
          nom: user.nom,
          prenom: user.prenom,
          nickname: user.nickname,
          auth_token: authToken,
          id_role: user.id_role,
          role: user.role,
        },
      });
    }

    return res.status(400).json({ error: "password non valide" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: `erreur serveur` });
  }
};

export const getAllUsers = (model) => async (req, res) => {
  const user = await model.getUsers();

  if (!user) {
    return res.status(404).send({ message: "inconnu" });
  }

  res.send({ results: [user] });
};

export const createNewUser = (model) => async (req, res) => {
  const data = req.body;

  try {
    const userExist = await model.getUserBy("", data.data.email);

    if (userExist) {
      return res.status(409).json({ error: "id existe déjà" });
    }

    // Encrypt user password
    const passwordHash = await bcrypt.hash(
      data.data.password,
      parseInt(ENCRYPTION_KEY)
    );

    // Create auth token with user info and expiry date
    const userData = {
      nom: data.data.nom,
      prenom: data.data.prenom,
      email: data.data.email,
      id_role: data.data.id_role,
      password: passwordHash,
    };

    // Persist user data
    await model.createUser(userData);

    const jwtOptions = {
      expiresIn: "24h", // Expire token in 24 hours
    };

    const authToken = jwt.sign(userData, AUTH_TOKEN_KEY, jwtOptions);

    return res.status(200).send({
      success: true,
      user: {
        user_id: userData.id,
        id_role: userData.id_role,
        email: userData.email,
        nom: userData.nom,
        prenom: userData.prenom,
        auth_token: authToken,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: `Erreur interne` });
  }
};
export const removeUser = (model) => async (req, res) => {
  const { id } = req.query;

  const userId = await model.removeUserById(id);

  if (!userId) {
    return res.status(400).send({ message: "id non supprimé..." });
  }

  res.send({ results: [userId] });
};

export const updateUserById = (model) => async (req, res) => {
  const { id, data } = req.body;

  const userId = await model.putUserById(id, data);

  if (!userId) {
    return res.status(400).send({ message: "id non modifié" });
  }

  res.send({ results: [userId] });
};

export const getAllRoles = (model) => async (req, res) => {
  const role = await model.getRoles();

  if (!role) {
    return res.status(404).send({ message: "Aucun rôle" });
  }

  res.send({ results: [role] });
};
