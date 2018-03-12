import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import JobPage from './Components/JobPage/JobPage'
import HomePage from './Components/HomePage/HomePage'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/Jobs" component={JobPage} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
