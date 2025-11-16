const express = require("express");
const cors = require("cors");

const itemRoutes = require("./src/routes/items");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Health & Food API Running" });
});

app.use("/api", itemRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
