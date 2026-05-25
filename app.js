const express = require("express");
const app = express();
const PORT = 3000;
const homePage = require("./routes/homepage");

app.use("/", homePage);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// test github sync
