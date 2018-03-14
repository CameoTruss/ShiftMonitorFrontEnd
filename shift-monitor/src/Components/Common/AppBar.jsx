import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


const styles = {
  root: {
    flexGrow: 1,
    width: '100%',
  }
};

export default class JobPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  static defaultProps = {
    classes: styles,
    title: "Cameo Shift Monitor"
  }

  render() {
    const { classes, title } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

JobPage.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};