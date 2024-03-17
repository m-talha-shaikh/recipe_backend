// backend/functions/searchRecipe.js

exports.handler = async (event, context) => {
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
      body: JSON.stringify(recipes),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
