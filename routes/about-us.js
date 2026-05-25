const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Ini adalah halaman about us",
  });
});

module.exports = router;
