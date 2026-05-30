const router = require("express").Router();
const newsData = require("../data.json");

router.get("/", (req, res) => {
  res.status(200).json(newsData);
});

router.get("/:title", (req, res) => {
  const newsParams = req.params.title;
  const newsQuery = req.query.title;

  if (newsQuery) {
    let theNews = newsData.filter((news) => {
      return news.title.toLowerCase().includes(newsQuery.toLowerCase());
    });
    if (theNews.length === 0) {
      return res.status(404).json({
        message: "Data does not found",
      });
    }
    res.status(200).json(theNews);
  } else {
    let theNews = newsData.filter((news) => {
      return news.title === newsParams;
    });
    if (theNews.length === 0) {
      return res.status(404).json({
        message: "Data does not found",
      });
      res.status(200).json(theNews);
    }
  }
});

module.exports = router;
