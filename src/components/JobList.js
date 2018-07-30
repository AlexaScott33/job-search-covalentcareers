import React, { Component } from 'react';
import moment from 'moment';
// import logo from './logo.svg';
// import './App.css';

class JobList extends Component {
  render() {
    const filteredBySearch = this.props.filteredList.map((job, index) => {
      let currentDate = moment('12/03/2015');
      let jobPostedDate = moment(job.posted_date).format('MM DD YYYY');
      let formatedDate = currentDate.diff(jobPostedDate, 'days');

      let jobContractType;
      if (job.contract_type === 'FT') {
        jobContractType = job.contract_type.replace('FT', 'Full-time');
      } else if (job.contract_type === 'PT') {
        jobContractType = job.contract_type.replace('PT', 'Part-time');
      }
      return (
        <li key={index}>
        {job.image}
        {job.job_title} - 
        {jobContractType} <br/>
        {job.organization} in {job.location} <br/>
        {job.score}% Match <br />
        {job.applicants}+ Applicants <br />
        {formatedDate} days ago
        </li>
      );
    });
    return (
      <div>
        <ul>
          {filteredBySearch}
        </ul>
      </div>
    );
  }
}

export default JobList;