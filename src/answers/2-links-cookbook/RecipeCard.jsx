const RecipeCard = (props) => {
  const recipe = props.recipe;
  const ingredientsList = recipe.ingredients.map(x => <p>{x}</p>);

  return (
    <div>
        <h3>{recipe.name}</h3>
        <hr/>
        {ingredientsList}
    </div>
  );
}

export default RecipeCard;