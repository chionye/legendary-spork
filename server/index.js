const axios = require("axios");
var cheerio = require("cheerio");
const express = require("express");
const app = express();


app.get('/api/v1/scrape', async (req, res)=>{
    const baseUrl = req.body.url;
    try {
        let homePageLinks = await getLinksFromURL(baseUrl);
        console.log(homePageLinks);
    } catch (e) {
        console.log(e);
    }
    res.send("test");
})

async function getLinksFromURL(url) {
  try {
    let links = [];
    let httpResponse = await axios.get(url);

    let $ = cheerio.load(httpResponse.data);
    let linkObjects = $("a"); // get all hyperlinks

    linkObjects.each((index, element) => {
      links.push({
        text: $(element).text(), // get the text
        href: $(element).attr("href"), // get the href attribute
      });
    });
    return links;
  } catch (e) {
    console.log(e);
  }
}

app.listen(5000, ()=>{
    console.log("app listening on port 5000")
});