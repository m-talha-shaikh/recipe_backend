// const axios = require('axios');

// exports.handler = async (event, context) => {
//   if (event.httpMethod === 'OPTIONS') {
//     // Respond to preflight requests
//     return {
//       statusCode: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers": "Content-Type",
//         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
//       },
//       body: ''
//     };
//   }

//   try {
//     const { query } = JSON.parse(event.body);

//     // Make a request to the Spoonacular API
//     const apiKey = '408d436b50c74df3bf2c7f01db1f6cd6';
//     const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
//     const response = await axios.get(baseUrl, {
//       params: {
//         apiKey: apiKey,
//         query: query,
//       },
//     });

//     // Extract recipe data from the response
//     const recipes = response.data.results;

//     return {
//       statusCode: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers": "Content-Type",
//         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
//       },
//       body: JSON.stringify(recipes),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Internal Server Error" }),
//     };
//   }
// };


const axios = require('axios');

exports.handler = async (event, context) => {
  if (event.httpMethod === 'OPTIONS') {
    // Respond to preflight requests
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
      },
      body: ''
    };
  }

  try {
    const { query } = JSON.parse(event.body);

    // Make a request to the Spoonacular API
    const apiKey = '408d436b50c74df3bf2c7f01db1f6cd6';
    const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
    const response = await axios.get(baseUrl, {
      params: {
        apiKey: apiKey,
        query: query,
      },
    });

    // Extract recipe data from the response
    const recipes = response.data.results;

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
      },
      body: JSON.stringify(recipes),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
