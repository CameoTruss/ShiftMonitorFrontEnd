import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { Query } from "react-apollo";
import gql from "graphql-tag";

const Books = () => (
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
);

export default Books;