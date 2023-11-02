import { knex } from "../../db.js";

export const table = "produits";

export const getTypes = async () => {
  const results = await knex("types").select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};
