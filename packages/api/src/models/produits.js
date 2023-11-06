import { knex } from "../../db.js";

export const table = "produits";

export const getTypes = async () => {
  const results = await knex("types").select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getModeles = async () => {
  const results = await knex("modeles").select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getMarques = async () => {
  const results = await knex("marques").select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const createProduit = async (data) => {
  const photoBuffer = Buffer.from(data.image, "base64");
  const results = await knex(table)
    .insert({ ...data, image: photoBuffer })
    .returning("id");

  return results[0];
};

export const putProduitById = async (id, data) => {
  const existingUser = await knex(table).select("*").where({ id }).first();

  if (!existingUser) {
    return null;
  }
  const updatedFields = {};

  if (data.titre !== existingUser.titre && data.title !== "") {
    updatedFields.titre = data.titre;
  }
  if (data.annee !== existingUser.annee && data.annee !== "") {
    updatedFields.annee = data.annee;
  }
  if (data.prix !== existingUser.prix && data.prix !== "") {
    updatedFields.prix = data.prix;
  }
  if (
    data.kilometrage !== existingUser.kilometrage &&
    data.kilometrage !== ""
  ) {
    updatedFields.kilometrage = data.kilometrage;
  }
  if (data.cylindree !== existingUser.cylindree && data.cylindree !== "") {
    updatedFields.cylindree = data.cylindree;
  }
  if (
    data.puissance_moteur !== existingUser.puissance_moteur &&
    data.puissance_moteur !== ""
  ) {
    updatedFields.puissance_moteur = data.puissance_moteur;
  }
  if (
    data.boite_vitesse !== existingUser.boite_vitesse &&
    data.boite_vitesse !== ""
  ) {
    updatedFields.boite_vitesse = data.boite_vitesse;
  }

  if (data.type !== existingUser.type && data.type !== "") {
    const types = await knex("types").select("*");

    if (types) {
      const typeIndex = types.find((typeObj) => typeObj.type === data.type);
      if (typeIndex) updatedFields.id_type = typeIndex?.id;
      else return null;
    }
  }

  if (Object.keys(updatedFields).length === 0) {
    return null;
  }

  const results = await knex(table)
    .update(updatedFields)
    .where({ id })
    .returning("id");

  if (results) return results[0];

  return null;
};

export const removeProduitById = async (id) => {
  return knex(table).where("id", id).del();
};

export const getProduits = async () => {
  const results = await knex(table)
    .select(
      knex.raw("ENCODE(image, 'base64') as image"),
      "produits.id",
      "produits.titre",
      "produits.id_type",
      "produits.annee",
      "produits.prix",
      "produits.kilometrage",
      "produits.id_marque",
      "produits.id_modele",
      "produits.cylindree",
      "produits.puissance_moteur",
      "produits.boite_vitesse",
      "types.type",
      "modeles.modele",
      "marques.marque"
    )
    .innerJoin("types", "types.id", "produits.id_type")
    .innerJoin("modeles", "modeles.id", "produits.id_modele")
    .innerJoin("marques", "marques.id", "produits.id_marque")
    .orderBy("id", "asc");

  if (results && results.length) {
    return results;
  }

  return null;
};
