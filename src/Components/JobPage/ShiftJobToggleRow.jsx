import React from 'react';
import PropTypes from 'prop-types';
import List, {ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader} from 'material-ui/List';
import {withStyles} from 'material-ui/styles';
import Switch from 'material-ui/Switch';
import WifiIcon from 'material-ui-icons/Wifi';
import BluetoothIcon from 'material-ui-icons/Bluetooth';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class ShiftJobToggleRow extends React.Component {

  render() {
    const { job, classes, onChange, checked } = this.props;
    // console.log(job);
    return (
      <ListItem
          key={job.JobId}
          button
          onClick={onChange(job.JobId)}
          className={classes.listItem}
        >
        <ListItemText primary={job.JobNumber} secondary={job.CustomerId}/>
        <ListItemSecondaryAction>
          <Switch onChange={onChange(job.JobId)} checked={checked}/>
        </ListItemSecondaryAction>
      </ListItem>
    );
  };
}

ShiftJobToggleRow.propTypes = {
  job: PropTypes.object,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
};

export default withStyles(styles)(ShiftJobToggleRow);