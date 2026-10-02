const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({
      message: "Prompt is required",
    });
  }

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/black-forest-labs/flux-1-schnell`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      console.error("Cloudflare error:", data);

      return res.status(500).json({
        message: "Failed to generate image",
      });
    }

    res.json({
      image: data.result.image,
    });
  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

module.exports = router;
