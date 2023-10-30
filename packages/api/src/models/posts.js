import { knex } from "../../db.js";

export const table = "posts";

export const getPostsAll = async () => {
  const results = await knex(table)
    .select(
      "posts.id",
      "posts.id_salon",
      "posts.message",
      "posts.time",
      "users.prenom",
      "posts.media"
    )
    .leftJoin("users", "posts.id_user", "users.id")
    .orderBy([{ column: "id_salon" }, { column: "time" }]);

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getPostsBySalon = async (id_salon) => {
  const results = await knex(table).select("*").where({ id_salon });

  if (results && results.length) {
    return results;
  }

  return null;
};

export const createPost = async (data) => {
  const results = await knex(table)
    .insert({ ...data })
    .returning("id");

  return results[0];
};
