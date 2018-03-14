import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import AlarmIcon from 'material-ui-icons/Alarm';
import NoteAddIcon from 'material-ui-icons/NoteAdd';
import LocationOnIcon from 'material-ui-icons/LocationOn';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0px'
  },
};

class SimpleBottomNavigation extends React.Component {
  // @TODO set state from props
  state = {
    value: 2,
  };

  handleChange = (event, value) => {
    // this.setState({ value });
    console.log(value);
    
    switch (value) {
      case 0:
        this.props.history.push("/Jobs");
        break;
      case 1:
        this.props.history.push("/Shift");
      default:
        break;
    }
    
    
  };

  render() {
    const { classes, currentPageIndex } = this.props;
    // const { value } = this.state;

    return (
      <BottomNavigation
        value={currentPageIndex}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Add Jobs to Shift" icon={<NoteAddIcon />} />
        <BottomNavigationAction label="Timer" icon={<AlarmIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPageIndex: PropTypes.number.isRequired
};

export default withStyles(styles)(withRouter(SimpleBottomNavigation));
