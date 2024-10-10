const BASE_URL = 'https://swapi.dev/api/';

// api.js

// Function to get character by ID
export async function getCharacterById(id) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    
    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    // Parse the JSON once
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching character by ID:", error);
    throw error;
  }
}

// Function to search character by name
export async function searchCharacterByName(name) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
    
    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Parse the JSON once
    const data = await response.json();
    
    // Check if the search returned results
    if (!data || data.count === 0) {
      throw new Error(`No characters found for the search term: ${name}`);
    }

    return data.results[0];  // Return the first result if there are any
  } catch (error) {
    console.error("Error searching character by name:", error);
    throw error;
  }
}


