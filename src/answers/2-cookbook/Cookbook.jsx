import RecipeCard from './RecipeCard';
import { recipes } from './recipeData';

const Cookbook = () => {
	console.log(recipes);
	return(
		<div style={{
			width:'30em', 
			height:'30em', 
			backgroundColor:'steelblue', 
			padding:'1em'}}>

			<h3>Link's Cookbook!</h3>
			<div style={{
				overflow:"scroll", 
				width:"70%", 
				height:"80%", 
				margin:"auto"}}>
				{recipes.map(x => <RecipeCard recipe={x}/>)}
			</div>
		</div>
	);
}

export default Cookbook;