import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <Router>
      <div>
       
        <Route exact path="/about" component={About} /> 
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={Home} />
      </div>
    </Router>
  )
}

export default App;
