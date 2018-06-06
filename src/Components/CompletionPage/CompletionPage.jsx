import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import PageTemplate from '../Common/PageTemplate'
import JobShiftNavigationBar from './JobShiftNavigationBar'

const styles = {
  root: {
    flexGrow: 1,
    width: '100%'
  }
};

class CompletionPage extends Component {

  constructor(props) {
    super(props);

    // this.handleToggle = this
    // .handleToggle
    // .bind(this);

    this.state = {}
  }

  static defaultProps = {
    classes: styles,
  }

  // handleToggle = value => () => {
  //   debugger;
  //   console.log(value);
  // }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <PageTemplate pageIndex={2}>
          <JobShiftNavigationBar />
        </PageTemplate>
      </div>
    );
  }

}

export default withStyles(styles)(CompletionPage);

CompletionPage.propTypes = {
  classes: PropTypes.object.isRequired,
};