import React from 'react';
import logo from './logo.svg';
import './assets/css/main.css';
import './assets/css/main.css';
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { linkList } from './pageLinks';

function App() {
  return (
    <Router>
      <div className="main">
        <header className="site-header">
          <Header />
        </header>
        <div className="site-content">
          {linkList.map(({exact, path, component}, index) =>
            <Route path={path} exact={exact} key={index} component={component} />
          )}
        </div>
        <footer className="site-footer">
          <Footer />
        </footer>
      </div>    
    </Router>
  );
}
export default App;