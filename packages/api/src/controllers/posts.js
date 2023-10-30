export const getPosts = (model) => async (req, res) => {
  const { salon } = req.query;

  const user = await model.getPostsBySalon(salon);

  if (!user) {
    return res.status(404).send({ message: "Post doesn't existe" });
  }

  res.send({ results: [user] });
};

export const getAllPosts = (model) => async (req, res) => {
  const post = await model.getPostsAll();

  if (!post) {
    return res.status(404).send({ message: "No posts" });
  }

  res.send({ results: [post] });
};

export const createNewPost = (model) => async (req, res) => {
  const { data } = req.body;
  const postId = await model.createPost(data);

  if (!postId) {
    return res.status(404).send({ message: "Something went wrong..." });
  }

  res.send({ results: [postId] });
};
