export const getAllComments = (model) => async (req, res) => {
  const comment = await model.getComments();

  if (!comment) {
    return res.status(404).send({ message: "No comments" });
  }

  res.send({ results: [comment] });
};

export const createNewComment = (model) => async (req, res) => {
  const { data } = req.body;
  const commentId = await model.createComment(data);

  if (!commentId) {
    return res.status(404).send({ message: "Something went wrong..." });
  }

  res.send({ results: [commentId] });
};
