import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader} from 'material-ui/List';
import Divider from 'material-ui/Divider'
import Switch from 'material-ui/Switch';
import WifiIcon from 'material-ui-icons/Wifi';
import BluetoothIcon from 'material-ui-icons/Bluetooth';
import ShiftJobToggleRow from './ShiftJobToggleRow';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});

class ShiftJobToggleList extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggle = this
      .handleToggle
      .bind(this);

    this.state = {
      checked: []
    }
  }

  handleToggle = value => () => {
    console.log("handleToggle ShiftJobToggleList");
    const {checked} = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({checked: newChecked});

  };

  render() {
    const {classes, jobs} = this.props;

    return (
      <div className={classes.root}>
        <List subheader={<ListSubheader> Add Jobs To Shift </ListSubheader>}>
          {jobs.map(job => 
          <div>
            <Divider/>

            <ShiftJobToggleRow
              classes={classes}
              key={job.JobId}
              job={job}
              onChange={this.handleToggle}
              checked={this
              .state
              .checked
              .indexOf(job.JobId) !== -1}/>
          </div>)}
        </List>
      </div>
    );
  }
}

ShiftJobToggleList.propTypes = {
  classes: PropTypes.object.isRequired,
  jobs: PropTypes.object.isRequired
};

export default withStyles(styles)(ShiftJobToggleList);
