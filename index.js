const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log(`Error fetching breed data: ${error}`);
  } else {
    console.log(description);
  }
});

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(`Breed ${breedName} not found.`, null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };

// breedFetcher.js
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(`Breed ${breedName} not found.`, null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };


// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log(`Error fetching breed data: ${error}`);
  } else {
    console.log(description);
  }
});

// breedFetcher.js
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(`Breed ${breedName} not found.`, null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };

// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.error(`Error fetching breed data: ${error}`);
  } else {
    console.log(description);
  }
});
