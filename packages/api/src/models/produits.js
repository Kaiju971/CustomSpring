import { knex } from "../../db.js";

export const table = "salons";

export const getAllSalons = async () => {
  const results = await knex(table).select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};
