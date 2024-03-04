import { useNavigate } from "react-router-dom";

const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<h2>intro to react</h2>
			<p>written for 24t1 training program</p>
			<p>Check the spec for which files to work in!</p>
			
			<div>
				<p>Exercise 1: Character Profile</p>
				<button>Spec</button>
				<button>Your code</button>
				<button>Sample Solution</button>
			</div>

			<div>
				<p>Exercise 2: Link's Cookbook</p>
				<button>Spec</button>
				<button>Your code</button>
				<button>Sample Solution</button>
			</div>
		</>
	);
}

export default LandingPage;