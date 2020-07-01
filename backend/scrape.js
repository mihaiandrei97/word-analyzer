const request = require("request");
const cheerio = require("cheerio");

function searchKeyword(keyword) {
  return new Promise((resolve, reject) => {
    request(
      encodeURI(`https://dexonline.ro/definitie/${keyword}`),
      (error, response, html) => {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          const result = $(".callout.callout-info");
          let data = {};
          result.each((ind, elm) => {
            const res = $(elm);
            const text = res.text();
            const nextElementValue = res
              .next(".defWrapper")
              .find("p")
              .first()
              .text();

            if (text.includes("relaționale")) {
              data["synonyme"] = nextElementValue;
            } else if (text.includes("explicative")) {
              data["definition"] = nextElementValue;
            }
          });

          resolve(data);
        } else {
          reject(
            error ||
              new Error(`${response.statusCode} | ${response.statusMessage}`)
          );
        }
      }
    );
  });
}

module.exports = searchKeyword;
