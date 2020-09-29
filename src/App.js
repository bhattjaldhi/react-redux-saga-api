import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// custome imports
import Home from './pages/Home';
import './App.css';
import './styles/app.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Home} />
        </header>
      </div>
    </Router>
  );
}

export default App;
