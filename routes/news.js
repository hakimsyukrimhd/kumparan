const router = require("express").Router();
const newsData = require("../data.json");

router.get("/", (req, res) => {
  res.status(200).json(newsData);
});

router.get("/:title", (req, res) => {
  const theNews = req.params.title;
  console.log(theNews);
  res.status(200).json(theNews);
});

module.exports = router;
