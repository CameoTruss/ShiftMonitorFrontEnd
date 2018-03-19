import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import Button from 'material-ui/Button';
import CheckBoxGroup from './CheckboxesGroup';

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
            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Lenticular-truss.svg/320px-Lenticular-truss.svg.png'} alt="boohoo" className="img-responsive"/>
            <ListItemText primary={`${truss.TaskName}`} secondary={`
              Quantity: n
              Span: x
              Overall Height: y
              Pitch: z
            `}/>
          <CheckBoxGroup/>
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