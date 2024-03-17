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
    // Perform your recipe search logic here

    const recipes = [
      { title: "Recipe 1", image: "recipe1.jpg" },
      { title: "Recipe 2", image: "recipe2.jpg" },
      // Dummy recipe data, replace with actual logic
    ];

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
