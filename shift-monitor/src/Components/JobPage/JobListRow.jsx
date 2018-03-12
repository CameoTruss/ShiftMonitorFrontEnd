import React from 'react';

const JobRow = ({job}) => {
  return (
    <tr>
      <td>{job.JobNumber}</td>
      <td>{job.CustomerId}</td>
    </tr>
  );
}

export default JobRow;