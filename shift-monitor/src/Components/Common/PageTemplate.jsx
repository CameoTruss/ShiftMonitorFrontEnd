import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import BottomNavigation from './BottomNavigation'
import AppBar from './AppBar'

const styles = {
  root: {
    flexGrow: 1,
    width: '100%',
  }
};

export default class PageTemplate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  static defaultProps = {
    classes: styles,
    title: "Cameo Shift Monitor",
  }

  render() {
    const {classes, title, pageIndex } = this.props;

    // @TODO high order component: https://stackoverflow.com/questions/20851533/react-js-wrapping-one-component-into-another/31564812#31564812
    return (
      <div className={classes.root}>
        <AppBar class={classes} title={title} />      
          {this.props.children}
        <BottomNavigation currentPageIndex={pageIndex}/>
      </div>
    );
  }

}
