const router = require("express").Router();
const news = require("./news");
const about = require("./about-us");
const contact = require("./contact-us");
const user = require("./user");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Selamat datang di HomePage",
  });
});

router.use("/news", news);
router.use("/about", about);78
router.use("/contact", contact);
router.use("/user", user);

module.exports = router;
