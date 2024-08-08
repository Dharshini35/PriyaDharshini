/*const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'*/

// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.

const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Function to fetch and process data from the Cat API
const getAverageCatWeight = async () => {
  try {
    const response = await fetch(catsAPI);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const breeds = await response.json();

    // Calculate the average weight
    const weights = breeds
      .map(breed => {
        const weight = breed.weight ? breed.weight.metric.split(' - ') : [0, 0];
        return (parseFloat(weight[0]) + parseFloat(weight[1])) / 2;
      })
      .filter(weight => !isNaN(weight));

    const averageWeight = weights.reduce((sum, weight) => sum + weight, 0) / weights.length;
    
    console.log(`Average cat weight in metric units: ${averageWeight.toFixed(2)} kg`);
  } catch (error) {
    console.error('Error fetching cat data:', error);
  }
};

// Function to fetch and process data from the Countries API
const processCountriesData = async () => {
  try {
    const response = await fetch(countriesAPI);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const countries = await response.json();

    // Find the 10 largest countries
    const largestCountries = countries
      .sort((a, b) => b.area - a.area)
      .slice(0, 10)
      .map(country => ({
        name: country.name,
        area: country.area
      }));
      
    console.log('10 largest countries by area:');
    largestCountries.forEach(country => {
      console.log(`Country: ${country.name}, Area: ${country.area} sq km`);
    });

    // Count the total number of distinct languages
    const languages = new Set();
    countries.forEach(country => {
      country.languages.forEach(lang => languages.add(lang.name));
    });

    console.log(`Total number of distinct languages used as official: ${languages.size}`);
  } catch (error) {
    console.error('Error fetching countries data:', error);
  }
};

// Execute the functions
getAverageCatWeight();
processCountriesData();
