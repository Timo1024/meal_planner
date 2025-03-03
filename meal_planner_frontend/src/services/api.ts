const API_URL = '/api';

export const addRecipe = async (name: string, ingredients: string) => {
  const response = await fetch(`${API_URL}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, ingredients }),
  });
  return response.json();
};
