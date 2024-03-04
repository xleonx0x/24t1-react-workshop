import RecipeCard from './RecipeCard';
import { recipes } from './recipeData';

const LinksCookbook = () => {
	console.log(recipes);
	return(
		<div style={{width:'30em', height:'30em', backgroundColor:'lightblue'}}>
			<h3>Link's Cookbook!</h3>
			{recipes.map(x => <RecipeCard recipe={x}/>)}
		</div>
	);
}

export default LinksCookbook;