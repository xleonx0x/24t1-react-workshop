import './CharacterCard.css'
// CHARACTER DATA
const character = {
	name: "Dimitri",
	level: 35,
	hp_max: 69,
	hp_curr: 50,
	class: "Great Lord",
	img: "https://static.wikia.nocookie.net/fireemblem/images/4/43/FE16_High_Lord_Other_Dimitri_Icon.gif",
	items: [
		{
			item: "Areadbhar",
			quantity: 1,
		},
		{
			item: "Vulnerary",
			quantity: 3,
		},
		{
			item: "Chest Key",
			quantity: 2,
		},
		{
			item: "Iron Lance",
			quantity: 1,
		},
		{
			item: "Critical Ring",
			quantity: 1,
		},
	],
	abilities: ["Atrocity", "Glowing Ember", "Tempest Lance"],
}

// TODO: YOUR CODE HERE
const CharacterCard = () => {
	
	const showItems = character.items.map(x =><p>{x.item} x{x.quantity}</p>);
	const showAbilities = character.abilities.map(x => <p>{x}</p>);

	return(
		<div style={{width:'25em', height:'fit-content'}}>
			<p className='name-text'>{character.name}</p>
			<div className='items-container'>
				<div className='stats-container'>
					<p className='stats-text'>LV {character.level}</p>
					<p className='stats-text'>HP {character.hp_curr}/{character.hp_max}</p>
				</div>
				<img src={character.img} style={{width:'50px'}}/>
				<p>{character.class}</p>
			</div>

			<div className='items-container' style={{display:'flex', justifyContent:'center'}}>
				<div style={{width:'100%', padding:'3% 0'}}>
					<p className='subheading'>Items</p>
					{showItems}
				</div>

				<div style={{width:'100%', padding:'3% 0'}}>
					<p className='subheading'>Abilities</p>
					{showAbilities}
				</div>
			</div>

		</div>
	);
}

export default CharacterCard;