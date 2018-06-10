import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Query} from "react-apollo";
import gql from "graphql-tag";
import {withStyles} from 'material-ui/styles';
import ShiftJobToggleList from './ShiftJobToggleList'
import PageTemplate from '../Common/PageTemplate'

const styles = {
  root: {
    flexGrow: 1,
    width: '10%'
  }
};

const GET_JOBS = gql `{ 
  jobs
  {
    JobId
    JobNumber
    CustomerId
    Added
  }
}`

class JobPage extends Component {
  static defaultProps = {
    classes: styles
  }

  render() {
    const {classes} = this.props;
    return (
      <Query query={GET_JOBS}>
        {({loading, error, data}) => {
          if (loading) 
            return <p>Loading...</p>;
          if (error) 
            return <p>Error :(</p>;
          return <div className={classes.root}>
            <PageTemplate pageIndex={0}>
              <ShiftJobToggleList jobs={data.jobs}/>
            </PageTemplate>
          </div>
        }}
      </Query>
    );
  }
}

export default JobPage;

JobPage.propTypes = {
  classes: PropTypes.object.isRequired
};