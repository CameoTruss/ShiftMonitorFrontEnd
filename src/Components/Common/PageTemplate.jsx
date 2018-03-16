import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import Footer from './Footer'
import Header from './Header'

const styles = {
  root: {
    flexGrow: 1,
    width: '100%',
  }
};

class PageTemplate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  static defaultProps = {
    classes: styles,
    title: "Cameo Shift Monitor (preview)",
  }

  render() {
    const {classes, title, pageIndex } = this.props;

    // @TODO high order component: https://stackoverflow.com/questions/20851533/react-js-wrapping-one-component-into-another/31564812#31564812
    return (
      <div className={classes.root}>
        <Header class={classes} title={title} />      
          {this.props.children}
        <Footer currentPageIndex={pageIndex}/>
      </div>
    );
  }

}

export default withStyles(styles)(PageTemplate);

PageTemplate.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  title: PropTypes.string
};