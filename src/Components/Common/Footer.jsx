import React from 'react';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import BottomNavigation, {BottomNavigationAction} from 'material-ui/BottomNavigation';
import AlarmIcon from 'material-ui-icons/Alarm';
import NoteAddIcon from 'material-ui-icons/NoteAdd';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0px'
  }
};

class Footer extends React.Component {
  // @TODO set state from props
  state = {
    value: 2
  };

  handleChange = (event, value) => {
    // this.setState({ value });
    console.log(value);

    switch (value) {
      case 0:
        this
          .props
          .history
          .push("/Jobs");
        break;
      case 1:
        this
          .props
          .history
          .push("/Shift");
        break;
      case 2:
        this
          .props
          .history
          .push("/Complete");
        break;
      default:
        break;
    }

  };

  render() {
    const {classes, currentPageIndex} = this.props;
    // const { value } = this.state;

    return (
      <BottomNavigation
        value={currentPageIndex}
        onChange={this.handleChange}
        showLabels
        className={classes.root}>
        <BottomNavigationAction label="Add Jobs to Shift" icon={< NoteAddIcon />}/>
        <BottomNavigationAction label="Timer" icon={< AlarmIcon />}/>
        <BottomNavigationAction label="Completion" icon={< CheckCircleIcon />}/>
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPageIndex: PropTypes.number.isRequired
};

export default withStyles(styles)(withRouter(Footer));
