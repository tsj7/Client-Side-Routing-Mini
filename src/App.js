import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'; // new

import './App.css';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="navlink--active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="navlink--active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="navlink--active">
            Products
          </NavLink>
        </li>
      </ul>

      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
    </div>
  </Router>
);

function About() {
  return (
    <div>
      <h1>About Component</h1>
      <p id="paragraph">This is the About Component</p>
    </div>
  );
}

function Movies() {
  return (
    <div>
      <h1>Movies Component</h1>
      <p id="paragraph">This is the Movies Component</p>
    </div>
  );
}

function Music() {
  return (
    <div>
      <h1>Music Component</h1>
      <p id="paragraph">This is the Music Component</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Component</h1>
      <p id="paragraph">This is the Home Component</p>
    </div>
  );
}

function Products(props) {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/products/movies" activeClassName="navlink--active">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/music" activeClassName="navlink--active">
            Music
          </NavLink>
        </li>
      </ul>
      <hr />
      <Route path="/products/movies" component={Movies} />
      <Route path="/products/music" component={Music} />
      <hr />
    </div>
  );
}



export default App;

// /friends/1

// import React from 'react';
// import './App.css';
// import Navigation from './components/Navigation';
// import { Home, About, Contact} from './components';
//
// const App = () => (
//   <div>
//     <Navigation />
//   </div>
// )
//
// export default App;
