import HeartContainer from "./HeartContainer";
import './RecipeCard.css'


const RecipeCard = ({recipe}) => {
  const ingredientsList = recipe.ingredients.map((x, i) => <p style={{color: "white"}} key={i}>{x}</p>);

  return (
    <div id="recipe-card-container">
        <h3 id="recipe-card-title">{recipe.name}</h3>
        <hr/>
        <HeartContainer numHearts={recipe.health_restored}/>
        {ingredientsList}
    </div>
  );
}

export default RecipeCard;