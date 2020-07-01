// idea

const express = require("express");
const app = express();
const searchKeyword = require("./scrape");

const port = 3030;

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/words", async (req, res) => {
  const { word } = req.query;
  try {
    const data = await searchKeyword(word);
    res.json({
      message: "done",
      data,
    });
  } catch (error) {
    res.json({
      message: error.message,
      data: {},
    });
  }
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
