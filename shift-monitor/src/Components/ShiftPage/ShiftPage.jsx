import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import PageTemplate from '../Common/PageTemplate'
import JobShiftNavigationBar from './JobShiftNavigationBar'
var json = require('../../Data/mock_data.json');

const styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  }
};

export default class ShiftPage extends Component {

  constructor(props) {
    super(props);

    // this.handleToggle = this
    // .handleToggle
    // .bind(this);

    this.state = {}
  }

  static defaultProps = {
    classes: styles,
    jobs: json["Job"],
  }

  // handleToggle = value => () => {
  //   debugger;
  //   console.log(value);
  // }

  render() {
    const {classes, title, jobs} = this.props;

    return (
      <div className={classes.root}>
        <PageTemplate pageIndex={1}>
          <JobShiftNavigationBar />
        </PageTemplate>
      </div>
    );
  }

}

ShiftPage.propTypes = {
  classes: PropTypes.object.isRequired,
  jobs: PropTypes.object.isRequired,
};