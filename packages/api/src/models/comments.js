import { knex } from "../../db.js";

export const table = "comments";

export const getComments = async () => {
  const results = await knex(table)
    .select(
      "comments.id",
      "comments.id_post",
      "comments.message",
      "comments.time",
      "users.prenom",
      "comments.media"
    )
    .leftJoin("users", "comments.id_user", "users.id")
    .orderBy([{ column: "time" }]);

  if (results && results.length) {
    return results;
  }

  return null;
};

export const createComment = async (data) => {
  const results = await knex(table)
    .insert({ ...data })
    .returning("id");

  return results[0];
};
