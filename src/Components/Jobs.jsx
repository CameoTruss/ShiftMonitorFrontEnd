import React, { Component } from "react";
import { Link } from "react-router-dom";

import { graphql, compose } from "react-apollo";
import QueryAllJobs from "../GraphQL/QueryAllJobs";


class AllJobs extends Component {

  static defaultProps = {
      jobs: [],
      deleteEvent: () => null,
  }

  renderJob = (job) => (
    <div className="content">
      <div className="header">{event.name}</div>
      <p>{job.customerName}</p>
    </div>
  );

  render() {
    const { jobs } = this.props;

    return (
      <div className="content">
        {jobs.map(renderJob)}
      </div>
    );
  }
}

export default compose(
  graphql(
    QueryAllJobs,
      {
          options: {
              fetchPolicy: 'cache-and-network',
          },
          props: ({ data: { listEvents = { items: [] } } }) => ({
              events: listEvents.items
          })
      }
  )
)(AllJobs);