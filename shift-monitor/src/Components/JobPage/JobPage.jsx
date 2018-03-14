import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import ShiftJobToggleList from './ShiftJobToggleList'
import PageTemplate from '../Common/PageTemplate'
var json = require('../../Data/mock_data.json');

const styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  }
};

export default class JobPage extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  static defaultProps = {
    classes: styles,
    jobs: json["Job"],
  }

  handleToggle = value => () => {
    console.log(value);
  }

  render() {
    const {classes, title, jobs} = this.props;

    return (
      <div className={classes.root}>
        <PageTemplate currentPageIndex={0}>
          <ShiftJobToggleList jobs={jobs} onChange={this.handleToggle} />
        </PageTemplate>
      </div>
    );
  }

}

JobPage.propTypes = {
  classes: PropTypes.object.isRequired,
  jobs: PropTypes.object.isRequired,
};