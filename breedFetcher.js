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

  const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
});

// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error message for an invalid breed, via callback', (done) => {
    fetchBreedDescription('invalid breed', (err, desc) => {
      // we expect an error for this scenario
      assert.notEqual(err, null);

      // desc should be null
      assert.equal(desc, null);

      done();
    });
  });
});
