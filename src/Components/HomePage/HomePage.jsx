import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import gql from "graphql-tag";



import ApolloClient from "apollo-boost";

/** local Apollo server:
 * follow steps here to start mock server:
 * https://www.apollographql.com/docs/apollo-server/example.html
 * 
 * chrome must be started to allow CORS:
 * https://stackoverflow.com/a/3177718
 * 
 */

export const client = new ApolloClient({
  // uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
  // start google with 
  uri: "http://localhost:3000/graphql"
});


client
  .query({
    query: gql`
      {
        books {
          title
          author 
        }
      }
    `
  })
  // see dev tools console in chrome
  .then(result => console.log(result));

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default HomePage;