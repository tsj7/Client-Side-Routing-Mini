import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import "./index.css";

ReactDOM.render(<App />, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
//
// import './index.css';
//
// function About() {
//   return (
//     <div>
//       <h1>About component</h1>
//       <p id="paragraph">This is the about component</p>
//     </div>
//   );
// }
//
// function Home() {
//   return (
//     <div>
//       <h1>Home component</h1>
//       <p id="paragraph">This is the home component</p>
//     </div>
//   );
// }
//
// function Movies() {
//   return (
//     <div>
//       <h1>movies component</h1>
//       <p id="paragraph">This is the movies component</p>
//     </div>
//   );
// }
//
// function Music() {
//   return (
//     <div>
//       <h1>Music component</h1>
//       <p id="paragraph">This is the music component</p>
//     </div>
//   );
// }
//
// function Products(props) {
//   return (
//     <div>
//       <ul>
//         <li><NavLink to="/products/movies" activeClassName="navlink--active" exact>Movies</NavLink></li>
//         <li><NavLink to="/products/music" activeClassName="navlink--active">Music</NavLink></li>
//       </ul>
//       <hr/>
//       <Route path="/products/movies" component={Movies} />
//       <Route path="/products/music" component={Music} />
//     <hr/>
//   </div>
//   );
// }
//
//
//
// ReactDOM.render(
// <Router>
//   <div>
//     <ul>
//       <li><NavLink to="/" activeClassName="navlink--active" exact>Home</NavLink></li>
//       <li><NavLink to="/about" activeClassName="navlink--active">About</NavLink></li>
//       <li><NavLink to="/products" activeClassName="navlink--active">products</NavLink></li>
//
//     </ul>
//   <Route path="/" component={Home} exact/>
//   <Route path="/about" component={About} />
//   <Route path="/products" component={Products} />
//
//
//
// </div>
// </Router>, document.getElementById('root'));
//
// // http://localhost:3000/
//
// // import app render app import css all in this file
