import { useNavigate } from "react-router-dom";

const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<div style={{margin:"3em"}}>
				<h2 style={{color:"powderblue"}}>intro to react</h2>
				<p>written for 24t1 training program</p>
				<p>Check the spec for which files to work in!</p>
			</div>

			<div>
				<p style={{color:"powderblue", fontWeight:"bold"}}>Exercise 1: Character Profile</p>
				<button onClick={() => navigate('/exercise1')}>Your code</button>
				<button onClick={() => navigate('/answers/exercise1')}>Sample Solution</button>
			</div>

			<div>
				<p style={{color:"powderblue", fontWeight:"bold"}}>Exercise 2: Link's Cookbook</p>
				<button onClick={() => navigate('/exercise2')}>Your code</button>
				<button onClick={() => navigate('/answers/exercise2')}>Sample Solution</button>
			</div>
		</>
	);
}

export default LandingPage;