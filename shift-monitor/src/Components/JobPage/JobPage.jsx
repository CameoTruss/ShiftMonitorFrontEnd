import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import JobList from './JobList'
import JobSwitchList from './JobSwitchList'
var json = require('../../Data/mock_data.json');

const styles = {
  root: {
    flexGrow: 1
  }
};

export default class JobPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // editing: {}
    }
  }

  static defaultProps = {
    // posts: [], onDelete: () => null, onEdit: () => null,
    classes: styles,
    jobs: json["Job"],
    title: "Cameo Shift Monitor"
  }

  render() {
    // const { jobs } = this.props; console.log(jobs); <JobList jobs={jobs}/> return
    // (   <div>   <AppBar     title="Title"
    // iconClassNameRight="muidocs-icon-navigation-expand-more"/>   </div> );
    const {classes, title, jobs} = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <JobSwitchList jobs={jobs}/>
      </div>
    );
  }

}
