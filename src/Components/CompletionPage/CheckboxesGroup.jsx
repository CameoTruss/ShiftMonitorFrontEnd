import React from 'react';
import {
  FormControl,
  FormGroup,
  FormControlLabel,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';

const styles = {
  checked: {
    color: green[500],
  },
};

class CheckboxesGroup extends React.Component {
  state = {
    built: true,
    loaded: false,
  };

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.built}
                onChange={this.handleChange('built')}
                value="built"
              />
            }
            label="Built"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.loaded}
                onChange={this.handleChange('loaded')}
                value="loaded"
                classes={{
                  checked: classes.checked,
                }}
              />
            }
            label="Loaded"
          />
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
    );
  }
}

export default withStyles(styles)(CheckboxesGroup);