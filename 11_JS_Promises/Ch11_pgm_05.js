// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.

// Define the API endpoint
const countriesAPI = 'https://restcountries.com/v2/all';

// Fetch data from the API
fetch(countriesAPI)
  .then(response => {
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response JSON
    return response.json();
  })
  .then(countries => {
    // Iterate over each country object in the array
    countries.forEach(country => {
      // Extract and print desired information
      const name = country.name;
      const capital = country.capital;
      const languages = country.languages.map(lang => lang.name).join(', ');
      const population = country.population;
      const area = country.area;

      console.log(`Country: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Languages: ${languages}`);
      console.log(`Population: ${population}`);
      console.log(`Area: ${area}`);
      console.log('--------------------------');
    });
  })
  .catch(error => {
    // Handle any errors that occurred during fetch
    console.error('There has been a problem with your fetch operation:', error);
  });
