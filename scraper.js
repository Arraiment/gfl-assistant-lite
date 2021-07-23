const { default: axios } = require('axios');
const cheerio = require('cheerio');

const getDolls = async () => {
  // Get html source
  const response = await axios.get('https://iopwiki.com/wiki/T-Doll_Index');
  // Throw error if fetch fails
  if (response.statusText !== 'OK') {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  } else {
    // Cheerio parses
    const $ = cheerio.load(response.data);
    // Gets and returns all T-Doll names
    const names = [];
    $('span.name').each(function () {
      names.push($(this).text());
    });
    return names;
  }
}

exports.getDolls = getDolls;