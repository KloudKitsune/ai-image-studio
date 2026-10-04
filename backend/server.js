require("dotenv").config();
// console.log(process.env.TEST_VARIABLE);

const express = require("express");
const cors = require("cors");
const imageRoutes = require("./routes/imageRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/images", imageRoutes);

app.get("/", (req, res) => {
  res.json({ message: "AI Image Studio API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
