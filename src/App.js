import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './App.css';
import JobPage from './Components/JobPage/JobPage'
import ShiftPage from './Components/ShiftPage/ShiftPage'
import CompletionPage from './Components/CompletionPage/CompletionPage'
import HomePage from './Components/HomePage/HomePage'

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <Router>
            <div>
              <Route exact={true} path="/" component={HomePage} />
              <Route exact={true} path="/Jobs" component={JobPage} />
              <Route exact={true} path="/Shift" component={ShiftPage} />
              <Route exact={true} path="/Complete" component={CompletionPage} />
            </div>
          </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
