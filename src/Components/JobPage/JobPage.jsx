import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ShiftJobToggleList from './ShiftJobToggleList'
import PageTemplate from '../Common/PageTemplate'
var json = require('../../Data/mock_data.json');

const styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  }
};

const GET_JOBS = gql`
{
  jobs {
    job_id,
    job_name
  }
}
`
class JobPage extends Component {

  constructor(props) {
    super(props);

    // this.handleToggle = this .handleToggle .bind(this);

    this.state = {}
  }

  static defaultProps = {
    classes: styles,
    jobs: json["Job"]
  }

  // handleToggle = value => () => {   debugger;   console.log(value); }

  render() {
    const {classes, jobs} = this.props;

    return (
      <div className={classes.root}>
        <PageTemplate pageIndex={0}>
          <ShiftJobToggleList jobs={jobs} onChange={this.handleToggle}/>
        </PageTemplate>
      </div>
    );
  }

}

export default withStyles(styles)(JobPage);

JobPage.propTypes = {
  classes: PropTypes.object.isRequired,
  jobs: PropTypes.object.isRequired
};