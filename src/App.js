import React from 'react';
import logo from './logo.svg';
import './App.css';
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
          {/*<Route path="/" exact component={HomeContent} />*/}
          {linkList.map(({exact, path, component}, index) =>
                <Route path={path} exact={exact} key={index} component={component} />
            )}
          {/*<Route path="/about/" component={AboutContent} />
          <Route path="/service/" component={ServiceContent} />
          <Route path="/service/" component={ServiceContent} />*/}
        </div>
        <footer className="site-footer">
          <Footer />
        </footer>
      </div>    
    </Router>
  );
}

export default App;