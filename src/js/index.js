//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";
import "../styles/navbar.css";
import "../styles/jumbotron.css";
import "../styles/cards.css";
import "../styles/footer.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

