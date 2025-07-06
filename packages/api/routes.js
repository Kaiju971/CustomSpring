import { Router } from "express";

import {
  getAllUsers,
  login,
  createNewUser,
  getAllRoles,
  updateUserById,
  removeUser,
} from "./src/controllers/user.js";
import * as userModel from "./src/models/user.js";
// import { getHoraires, updateHorairesById } from "./src/controllers/horaires";
// import * as horairesModel from "./src/models/horaires";
import {
  getAllTypes,
  getAllModeles,
  getAllMarques,
  createNewProduit,
  updateProduitById,
  removeProduit,
  getAllProduits,
} from "./src/controllers/produits.js";
import * as produitModel from "./src/models/produits.js";

import {
  validateHasParameters,
  validateEmailFormat,
  validatePasswordLength,
} from "./src/middleware/validation.js";
import { checkAuthToken } from "./src/middleware/autho.js";

const router = Router();

/**
 * Enregistrer un id
 */
router.post(
  "/enregister",
  validateHasParameters("email", "password", "nom", "prenom", "id_role"),
  validateEmailFormat,
  validatePasswordLength,
  createNewUser(userModel)
);

/**
 * Autentification session login id utilisant email et password si valide.
 */
router.post(
  "/login",
  validateHasParameters("email", "password"),
  login(userModel)
);
router.get("/users", checkAuthToken(true), getAllUsers(userModel));
router.put("/update", checkAuthToken(true), updateUserById(userModel));
router.delete("/delete", checkAuthToken(true), removeUser(userModel));
router.get("/roles", getAllRoles(userModel));

router.get("/types", getAllTypes(produitModel));
router.get("/modeles", getAllModeles(produitModel));
router.get("/marques", getAllMarques(produitModel));
router.post("/createproduct", checkAuthToken(), createNewProduit(produitModel));
router.put("/updproduct", checkAuthToken(), updateProduitById(produitModel));
router.delete("/delproduct", checkAuthToken(), removeProduit(produitModel));
router.get("/products", getAllProduits(produitModel));

export default router;
