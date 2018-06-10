import { Query } from "react-apollo";
import gql from "graphql-tag";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

class BooksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    return (
    <Query
    query={gql`
      {
        books {
          title
          author
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.books.map(({ title,author }) => (
        <div key={title}>
          <p>{`${title}: ${author}`}</p>
        </div>
      ));
    }}
  </Query>
  );}
}

export default BooksPage;