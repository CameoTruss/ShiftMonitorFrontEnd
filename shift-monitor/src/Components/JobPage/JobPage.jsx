import React, {Component} from "react";
import JobList from './JobList'
var json = require('../../Data/mock_data.json');

export default class JobPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // editing: {}
    }
  }
  

  static defaultProps = {
    // posts: [],
    // onDelete: () => null,
    // onEdit: () => null,
    jobs: json["Job"]
  }

  render() {
    const { jobs } = this.props;
    // console.log("render() JobPage")
    // console.log(jobs);
    return (
        <JobList jobs={jobs}/>
    );
  }

}