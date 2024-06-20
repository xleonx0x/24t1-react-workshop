import { character } from "./characterData";
// TODO: YOUR CODE HERE
const CharacterCard = () => {
	const styles = {
		container : {
			width: "400px",
			display: "flex"
		},
		nameContainer : {
			backgroundColor: "blue",
			fontWeight: "bold",
		},
		statContainer : {
			display: "flex",
			gap: "30px",
			justifyContent: "center",
			color: "black"
		},
		image : {
			width: "60px",
			height: "60px"
		},
		body : {
			backgroundColor: "#FEE5C5"
		},
		coolstats : {
			display: "flex",
			flexOrientation: "row",
			justifyContent: "center",
			color: "black"
		}

	}
	return(
		<>
		<div id="container" style={styles.container}>
			<div id="heading" style={styles.nameContainer}>{character.name}</div>
			<div style={styles.body}id="body">
				<div id="details" style={styles.statContainer}>
					<div>LV {character.level} </div>
					<div>HP {character.hp_curr}/{character.hp_max}</div>
					</div>
					<img style={styles.image}src={character.img}></img>
					<div style={{"color": "black"}}>Great Lord</div>
				</div>
			<div id="menu"style={styles.body}>
				<div id="coolstats" style={styles.coolstats}>
					<div>
					<ul>
					<p style={{"color": "black"}}>Items</p>
					<li>{character.items[0].item} x{character.items[0].quantity}</li>
					<li>{character.items[1].item} x{character.items[1].quantity}</li>
					<li>{character.items[2].item} x{character.items[2].quantity}</li>
					<li>{character.items[3].item} x{character.items[3].quantity}</li>
					<li>{character.items[4].item} x{character.items[4].quantity}</li>
					</ul>
					</div>
					<div>
					<ul>
					<p style={{"color": "black"}}>Abilities</p>
					<li>{character.abilities[0]}</li>
					<li>{character.abilities[1]}</li>
					<li>{character.abilities[2]}</li>
					</ul>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default CharacterCard;
