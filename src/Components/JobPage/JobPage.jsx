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

class JobPage extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = value => () => {
      debugger;
      console.log(value);
    }
  }

  static defaultProps = {
    classes: styles
  }

  render() {
    const {classes} = this.props;
    return (
      <Query query={gql ` { jobs { JobId JobNumber CustomerId } } `}>
        {({loading, error, data}) => {
          if (loading) 
            return <p>Loading...</p>;
          if (error) 
            return <p>Error :(</p>;
          return <div className={classes.root}>
            <PageTemplate pageIndex={0}>
              <ShiftJobToggleList jobs={data.jobs} onChange={this.handleToggle}/>
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