const RecipeCard = ({ recipe }) => {
  return (
    <article className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.name} />
      </div>
      <div className="recipe-body">
        <h3>{recipe.name}</h3>
        <p>{recipe.instructions[0]}</p>

        <div className="recipe-meta">
          <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} MIN</span>
          <i></i>
          <span>{recipe.difficulty} PREP</span>
          <i></i>
          <span>{recipe.servings} SERVES</span>
        </div>

        <button className="button button-outline">View Recipe</button>
      </div>
    </article>
  );
};

export default RecipeCard;
