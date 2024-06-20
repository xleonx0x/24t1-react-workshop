import { character } from "./characterData";
import './characterCard.css'
// TODO: YOUR CODE HERE
const CharacterCard = () => {
	const styles = {
		container : {
			width: "400px",
			display: "flex",
			flexDirection: "column",
			gap: "10px"
		},
		nameContainer : {
			backgroundColor: "#08018A",
			border: "2px #DEB887 solid",
			padding: "5px",
			fontWeight: "600"
		},
		statContainer : {
			display: "flex",
			gap: "50px",
			justifyContent: "center",
			color: "black"
		},
		image : {
			width: "45px",
			height: "40px",
			margin: "5px"
		},
		body : {
			backgroundColor: "#FEE5C5"
		},
		coolstats : {
			display: "flex",
			flexOrientation: "row",
			justifyContent: "space-between",
			color: "black"
		}

	}
	return(
		<>
		<div id="container" style={styles.container}>
			<div id="heading" style={styles.nameContainer}>{character.name}</div>
			<div style={styles.body}id="body">
				<div id="details" style={styles.statContainer}>
					<div style={{"fontWeight": "bold"}}>LV {character.level} </div>
					<div style={{"fontWeight": "bold"}}>HP {character.hp_curr}/{character.hp_max}</div>
					</div>
					<img style={styles.image}src={character.img}></img>
					<div style={{"color": "black"}}>Great Lord</div>
				</div>
			<div id="menu"style={styles.body}>
				<div id="coolstats" style={styles.coolstats}>
					<div>
					<ul>
					<p style={{"color": "black", "fontWeight": "bold"}}>Items</p>
					<li>{character.items[0].item} x{character.items[0].quantity}</li>
					<li>{character.items[1].item} x{character.items[1].quantity}</li>
					<li>{character.items[2].item} x{character.items[2].quantity}</li>
					<li>{character.items[3].item} x{character.items[3].quantity}</li>
					<li>{character.items[4].item} x{character.items[4].quantity}</li>
					</ul>
					</div>
					<div>
					<ul>
					<p style={{"color": "black", "fontWeight": "bold"}}>Abilities</p>
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
