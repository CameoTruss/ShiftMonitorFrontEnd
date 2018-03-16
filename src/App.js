import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import JobPage from './Components/JobPage/JobPage'
import ShiftPage from './Components/ShiftPage/ShiftPage'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact={true} path="/" component={JobPage} />
            <Route exact={true} path="/Jobs" component={JobPage} />
            <Route exact={true} path="/Shift" component={ShiftPage} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
