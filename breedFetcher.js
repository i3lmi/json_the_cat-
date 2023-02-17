const request = require('request');

const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(`Error fetching breed data: ${error}`);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed ${breedName} not found.`);
    } else {
      const description = data[0].description;
      console.log(description);
    }
  }
});


request(url, (error, response, body) => {
    if (error) {
      console.log(`Error fetching breed data: ${error}`);
    } else {
      // handle successful response
    }
  });

  eslint breedFetcher.js
