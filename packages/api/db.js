import Knex from "knex";
import { dbConnection, dbPoolMax, dbPoolMin } from "./config.js";

const knexConfig = {
  client: "pg",
  connection: {
    connectionString: dbConnection,
  },
  pool: { min: dbPoolMin, max: dbPoolMax },
};

export const knex = Knex(knexConfig);

/**
 * Truncate a table, typically for testing purposes.
 */
export const truncate = async (table) => knex.raw(`truncate table ${table}`);

/**
 * Destroy the database connection.
 */

export const destroy = async () => knex.destroy();
