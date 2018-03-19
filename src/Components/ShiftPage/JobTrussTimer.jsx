import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import green from 'material-ui/colors/green';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing.unit,
    complete: green[500]
  },
  input: {
    display: 'none'
  }
});

function FolderList(props) {
  const {classes, onClick, trusses } = props;
  return (
    <div className={classes.root}>
      <List>
        <Divider/> {trusses.map(truss => <div>
          <ListItem>
            <ListItemText primary={`${truss.TaskName}`} secondary="Completed 1/4"/>
            <Button onClick={onClick} variant="raised" className={classes.button} size="large" color="primary">
              Start {`${truss.TaskName}`}
            </Button>
            <Button onClick={onClick} variant="raised" className={classes.button} size="large" color="secondary">
              Pause {`${truss.TaskName}`}
            </Button>
          </ListItem>
          <Divider/>
        </div>)}
      </List>
    </div>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
  trusses: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(FolderList);