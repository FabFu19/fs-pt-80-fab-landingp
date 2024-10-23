import React from "react";
import { NavBar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const my_card_arr =[1,2,3,4];
	return (
		<div>
			<NavBar />
			<div className="container mb-3">
				<div className="row bg-light">
					<div className="col-12 pt-2 px-3 pb-5">
						<Jumbotron />
					</div>
				</div>
			</div>
			
			<div className="container mb-4">
				<div className="row">
					{my_card_arr.map(el => (<Card key={el} />)) }
				</div>
			</div>
			<Footer />
		</div>
		
	);
};

export default Home;
