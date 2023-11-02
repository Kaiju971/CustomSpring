import { knex } from "../../db.js";

export const table = "users";

export const getUsers = async () => {
  const results = await knex(table)
    .select(
      "users.id",
      "users.nom",
      "users.prenom",
      "users.email",
      "users.id_role",
      "users.password",
      "roles.role"
    )
    .innerJoin("roles", "users.id_role", "roles.id");
  if (results && results.length) {
    return results;
  }

  return null;
};

export const getUserBy = async (id = "", email = "", password = "") => {
  const query = knex(table)
    .select(
      "users.id",
      "users.nom",
      "users.prenom",
      "users.email",
      "users.id_role",
      "users.password",
      "roles.role"
    )
    .innerJoin("roles", "roles.id", "users.id_role");
  if (id && !email && !password) {
    query.where("users.id", id);
  } else if (!id && email && password) {
    query.where({ email, password });
  } else if (!id && email && !password) {
    query.where({ email });
  }

  const results = await query;

  if (results && results.length) {
    return results[0];
  }

  return null;
};

export const putUserById = async (id, data) => {
  const existingUser = await knex(table).select("*").where({ id }).first();

  if (!existingUser) {
    return null;
  }
  const updatedFields = {};

  if (data.nom !== existingUser.nom && data.nom !== "") {
    updatedFields.nom = data.nom;
  }
  if (data.prenom !== existingUser.prenom && data.prenom !== "") {
    updatedFields.prenom = data.prenom;
  }
  if (data.email !== existingUser.email && data.email !== "") {
    updatedFields.email = data.email;
  }

  if (data.role !== existingUser.role && data.role !== "") {
    const roles = await knex("roles").select("*");

    if (roles) {
      const roleIndex = roles.find((roleObj) => roleObj.role === data.role);
      if (roleIndex) updatedFields.id_role = roleIndex?.id;
      else return null;
    }
  }

  if (keys(updatedFields).length === 0) {
    return null;
  }

  const results = await knex(table)
    .update(updatedFields)
    .where({ id })
    .returning("id");

  if (results) return results[0];

  return null;
};

export const createUser = async (data) => {
  const results = await knex(table)
    .insert({ ...data })
    .returning("id");

  return results[0];
};

export const removeUserById = async (id) => {
  return knex(table).where("id", id).del();
};

export const getUser = async (email, password) => {
  const results = await knex(table)
    .select(
      knex.raw("ENCODE(photo, 'base64') as photo"),
      "prenom",
      "email",
      "id"
    )
    .where({ email, password });

  if (results && results.length) {
    return results[0];
  }

  return null;
};

export const getRoles = async () => {
  const results = await knex("roles").select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};
