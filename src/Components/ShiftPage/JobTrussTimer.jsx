import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import WorkIcon from 'material-ui-icons/Work';
import BeachAccessIcon from 'material-ui-icons/BeachAccess';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing.unit
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
            <Avatar>
              <ImageIcon/>
            </Avatar>
            <ListItemText primary={`${truss.TaskId}`} secondary="Completed 1/4"/>
            <Button onClick={onClick} variant="raised" className={classes.button} size="large">
              Start {`${truss.TaskId}`}
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