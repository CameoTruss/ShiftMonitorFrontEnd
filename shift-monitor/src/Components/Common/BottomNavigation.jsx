import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

const styles = {
  root: {
    width: '100%',
  },
};

class SimpleBottomNavigation extends React.Component {
  // @TODO set state from props
  state = {
    value: 2,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    switch (value) {
      case 0:
        this.props.history.push("/Jobs");
        break;
      case 1:
        this.props.history.push("/Template");
      default:
        break;
    }
    
    console.log(value);
    
  };

  render() {
    const { classes, currentPageIndex } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Add Jobs to Shift" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Timers" icon={<FavoriteIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPageIndex: PropTypes.number.isRequired
};

export default withStyles(styles)(withRouter(SimpleBottomNavigation));
