const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Ini adalah halaman user",
  });
});

module.exports = router;
