const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { prompt } = req.body;

  console.log("Received prompt:", prompt);

  res.json({
    message: "Image request received",
    prompt: prompt,
  });
});

module.exports = router;
