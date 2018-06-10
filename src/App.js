import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import './App.css';
import PropTypes from 'prop-types';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import JobPage from './Components/JobPage/JobPage'
import ShiftPage from './Components/ShiftPage/ShiftPage'
import CompletionPage from './Components/CompletionPage/CompletionPage'
import HomePage from './Components/HomePage/HomePage'
import BooksPage from './Components/Books'

/** local Apollo server:
 * follow steps here to start mock server:
 * https://www.apollographql.com/docs/apollo-server/example.html
 * 
 * chrome must be started to allow CORS:
 * https://stackoverflow.com/a/3177718
 * google-chrome-stable --disable-web-security --user-data-dir=~/.config/google-chrome
 */

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

const theme = createMuiTheme();

class App extends Component {
  static defaultProps = {
    client
  }

  render() {

    const { client } = this.props;

    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <div>
              <Route exact={true} path="/" component={HomePage}/>
              <Route exact={true} path="/Books" component={BooksPage}/>
              <Route exact={true} path="/Jobs" component={JobPage}/>
              <Route exact={true} path="/Shift" component={ShiftPage}/>
              <Route exact={true} path="/Complete" component={CompletionPage}/>
            </div>
          </Router>
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}


App.propTypes = {
  client: PropTypes.object.isRequired,
};

export default App;
