import express from "express";
import cors from "cors";

import usersRoutes from "./routes.js";

const app = express();
const port = 4000;

// CORS implemented so that we don't get errors when trying to access the server from a different server location

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use("/api/", usersRoutes);

app.post("/api/upload", async (req, res) => {
  try {
    const { apiKey, imageFile } = req.body;

    const formData = new FormData();
    formData.append("image", imageFile);

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: formData,
    };

    const response = await fetch(
      "https://api.imgbb.com/1/upload",
      requestOptions
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Ошибка при загрузке фотографии на ImgBB");
    }

    const imageUrl = data.data.url;
    res.json({ imageUrl });
  } catch (error) {
    console.error("Произошла ошибка:", error);
    res.status(500).json({ error: "Произошла ошибка" });
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port},http://localhost:${port}.`);
});
