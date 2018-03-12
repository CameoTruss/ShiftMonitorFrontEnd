import React from 'react';
import PropTypes from 'prop-types';
import List, {ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader} from 'material-ui/List';
import Switch from 'material-ui/Switch';
import WifiIcon from 'material-ui-icons/Wifi';
import BluetoothIcon from 'material-ui-icons/Bluetooth';

class JobSwitchRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this
      .handleToggle
      .bind(this);
    this.state = {
      checked: false,
    }
  }

  handleToggle() {
    var newChecked = !this.state.checked;
    this.setState({checked: newChecked});
  }

  render() {
    console.log(this.props.job.jobNumber);
    const job = this.props.job;
    console.log(job);
    return (
      <ListItem>
        <ListItemIcon>
          <WifiIcon/>
        </ListItemIcon>
        <ListItemText primary={this.props.job.JobNumber}/>
        <ListItemSecondaryAction>
          <Switch onChange={this.handleToggle} checked={this.state.checked}/>
        </ListItemSecondaryAction>
      </ListItem>
    );
  };
}

JobSwitchRow.propTypes = {
  job: PropTypes.object
};

export default JobSwitchRow;