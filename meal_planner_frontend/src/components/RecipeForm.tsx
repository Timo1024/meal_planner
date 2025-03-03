import React, { useState } from 'react';

const RecipeForm: React.FC = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Recipe Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
