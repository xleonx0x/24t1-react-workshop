import './CharacterCard.css'
import { character } from './characterData';

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