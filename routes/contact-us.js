const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Ini adalah halaman contact Us",
  });
});

module.exports = router;
