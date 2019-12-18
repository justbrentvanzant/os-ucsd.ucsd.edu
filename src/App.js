import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from "./routes/home";
function App() {
    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
}

export default App;