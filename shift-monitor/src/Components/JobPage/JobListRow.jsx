import React from 'react';

const JobRow = ({job}) => {
  // console.log(job);
  return (
    <tr>
      <td>{job.JobNumber}</td>
      <td>{job.CustomerId}</td>
    </tr>
  );
}

export default JobRow;