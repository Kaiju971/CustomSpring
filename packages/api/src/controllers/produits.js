export const getAllTypes = (model) => async (req, res) => {
  const types = await model.getTypes();

  if (!types) {
    return res.status(404).send({ message: "No types" });
  }

  res.send({ results: [types] });
};

export const getAllModeles = (model) => async (req, res) => {
  const modeles = await model.getModeles();

  if (!modeles) {
    return res.status(404).send({ message: "No modeles" });
  }

  res.send({ results: [modeles] });
};

export const getAllMarques = (model) => async (req, res) => {
  const marques = await model.getMarques();

  if (!marques) {
    return res.status(404).send({ message: "No marques" });
  }

  res.send({ results: [marques] });
};

export const createNewProduit = (model) => async (req, res) => {
  const data = req.body;

  const produitId = await model.createProduit(data);

  if (!produitId) {
    return res.status(404).send({ message: "Something went wrong..." });
  }

  res.send({ results: [produitId] });
};

export const updateProduitById = (model) => async (req, res) => {
  const { id, data } = req.body;

  const produitId = await model.putProduitById(id, data);

  if (!produitId) {
    return res.status(400).send({ message: "Produit doesn't modified" });
  }

  res.send({ results: [produitId] });
};

export const removeProduit = (model) => async (req, res) => {
  const { id } = req.body;

  const produitId = await model.removeProduitById(id);

  if (!produitId) {
    return res.status(400).send({ message: "Produit has not been deleted..." });
  }

  res.send({ results: [produitId] });
};

export const getAllProduits = (model) => async (req, res) => {
  const user = await model.getProduits();

  if (!user) {
    return res.status(404).send({ message: "No produits" });
  }

  res.send({ results: [user] });
};
