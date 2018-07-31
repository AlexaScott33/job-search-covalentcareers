import React, { Component } from 'react';
import moment from 'moment';

import './JobList.css';


class JobList extends Component {
  render() {
    const filteredBySearch = this.props.filteredList.map((job, index) => {
      //set current date to be a specific date back in 2015 
      let currentDate = moment(new Date('12/03/2015'));
      let jobPostedDate = moment(new Date(job.posted_date));
      let formatedDate = currentDate.diff(jobPostedDate, 'days');

      let jobContractType;
      if (job.contract_type === 'FT') {
        jobContractType = job.contract_type.replace('FT', 'Full-time');
      } else if (job.contract_type === 'PT') {
        jobContractType = job.contract_type.replace('PT', 'Part-time');
      }

      if (job.score >= 90) {
        return (
          <div key={index}>
          <div>
            <img className="rounded" src={`${job.image}`} alt={`${job.organization}`}/>
          </div>
          <div className="border-bottom">
            <p className="text-primary font-weight-bold p-title-css">{`${job.job_title} - ${jobContractType}`}</p>
            <p className="font-weight-light p-css">{`${job.organization} in ${job.location}`}</p>
            <p className="green-background rounded">{job.score}% Match</p>
            <p className="grey-background rounded">{job.applicants}+ Applicants</p>
            <p className="grey-background rounded">{formatedDate} days ago</p>
          </div>
          </div>
        );
      } else if (job.score < 90) {
        return (
          <div key={index}>
          <div>
            <img className="rounded" src={`${job.image}`} alt={`${job.organization}`}/>
          </div>
          <div className="border-bottom">
            <p className="text-primary font-weight-bold p-title-css">{`${job.job_title} - ${jobContractType}`}</p>
            <p className="font-weight-light p-css ">{`${job.organization} in ${job.location}`}</p>
            <p className="blue-background rounded">{job.score}% Match</p>
            <p className="grey-background rounded">{job.applicants}+ Applicants</p>
            <p className="grey-background rounded">{formatedDate} days ago</p>
          </div>
          </div>
        );
      }
    });
    return (
      <div>
        <div>
          <div className="list-group">
            {filteredBySearch}
          </div>
        </div>
      </div>
    );
  }
}

export default JobList;