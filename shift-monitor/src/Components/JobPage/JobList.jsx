import React from 'react';
import JobListRow from './JobListRow'

const JobList = ({jobs}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Job ID</th>
          <th>Customer</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map(job => <JobListRow key={job.JobId} job={job}/>)}
      </tbody>
    </table>
  );
}

export default JobList;
