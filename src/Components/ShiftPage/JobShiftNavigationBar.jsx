import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import JobTrussTimer from './JobTrussTimer';
var json = require('../../Data/mock_data.json');

function TabContainer(props) {
  const {children, dir} = props;

  return (
    <Typography component="div" dir={dir} style={{
      padding: 8 * 3
    }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    position: 'relative',
    height: '100%',
    minHeight: 200
  }
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0
  };

  static defaultProps = {
    classes: styles,
    jobs: json["Shift"]
  }

  handleChange = (event, value) => {
    this.setState({value});
  };

  handleChangeIndex = index => {
    this.setState({value: index});
  };

  render() {
    const {classes, theme, handleClick, jobs} = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };

    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth>
              {jobs.map(job => <Tab label={`${job.JobNumber}`}/>)}
            </Tabs>
          </AppBar>
        </div>
        <SwipeableViews
          axis={theme.direction === 'rtl'
          ? 'x-reverse'
          : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          {jobs.map(job => <TabContainer dir={theme.direction}>
            <JobTrussTimer onClick={handleClick} trusses={job["TaskList"]}/>
          </TabContainer>)}
        </SwipeableViews>
      </div>
    );
  }

}

FloatingActionButtonZoom.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  jobs: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(FloatingActionButtonZoom);