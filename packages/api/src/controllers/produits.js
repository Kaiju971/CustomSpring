export const getAllTypes = (model) => async (req, res) => {
  const types = await model.getTypes();

  if (!types) {
    return res.status(404).send({ message: "No types" });
  }

  res.send({ results: [types] });
};
