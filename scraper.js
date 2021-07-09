const axios = require('axios').default;
const cheerio = require('cheerio');

const getDolls = async () => {
  const URL = "https://iopwiki.com/wiki/T-Doll_Index";
  try {
    // Gets html source
    const response = await axios.get(URL);
    // Cheerio parses
    const $ = cheerio.load(response.data);
    // Gets and returns all T-Doll names
    const names = [];
    $('span.name').each(function (i, elem) {
      names[i] = $(this).text();
    });
    return names;
  } catch (error) {
    console.error(error);
  }
}

exports.getDolls = getDolls;