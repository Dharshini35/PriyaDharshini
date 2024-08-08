// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Print out all the cat names in to catNames variable.

// Define the API endpoint for cat breeds
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Variable to hold the cat names
let catNames = [];

// Fetch data from the Cat API
fetch(catsAPI)
  .then(response => {
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response JSON
    return response.json();
  })
  .then(breeds => {
    // Extract cat names from the breeds array
    catNames = breeds.map(breed => breed.name);

    // Print out all the cat names
    console.log('Cat Names:', catNames);
  })
  .catch(error => {
    // Handle any errors that occurred during fetch
    console.error('There has been a problem with your fetch operation:', error);
  });
