export const getSalons = (model) => async (req, res) => {
  const list = await model.getAllSalons();

  if (!list) {
    return res.status(404).send({ message: "No salons" });
  }

  res.send({ results: [list] });
};
