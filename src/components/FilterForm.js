import React, { Component } from 'react';
import JobList from './JobList';


class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      ptClick: false,
      ftClick: false
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handlePtClick = () => {
    this.setState({
      ptClick: !this.state.ptClick
    })
  }

  handleFtClick = () => {
    this.setState({
      ftClick: !this.state.ftClick
    })
  }

  render() {
    //filters for keyword in company name, location, or job title
    let jobSearchFilter = this.props.jobData.filter((job) => {
      if (job.organization.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
       return job;
      }
      if (job.location.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        return job;
       }
       if (job.job_title.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        return job;
       } 
   });

   //filters for PT jobs that match that keyword
   if (this.state.input !== '' && this.state.ptClick === true) {
    jobSearchFilter = this.props.jobData.filter((job) => {
      if (job.contract_type === 'PT' && job.organization.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        return job;
      }
      if (job.contract_type === 'PT' && job.location.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        return job;
      }
      if (job.contract_type === 'PT' && job.job_title.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        return job;
      }
    }); 
  }

  //filters for FT jobs that match that keyword
  if (this.state.input !== '' && this.state.ftClick === true) {
    jobSearchFilter = this.props.jobData.filter((job) => {
      if (job.contract_type === 'FT' && job.organization.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        return job;
      }
      if (job.contract_type === 'FT' && job.location.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        return job;
      }
      if (job.contract_type === 'FT' && job.job_title.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        return job;
      }
    }); 
  }

  //filters for all PT jobs
   if (this.state.ptClick === true && this.state.input === '') {
     jobSearchFilter = this.props.jobData.filter((job) => {
      if (job.contract_type === 'PT') {
        return job;
      }
     });
   }

   //filters for all FT jobs
   if (this.state.ftClick === true && this.state.input === '') {
    jobSearchFilter = this.props.jobData.filter((job) => {
     if (job.contract_type === 'FT') {
       return job;
     }
    });
  }

  //filters for all PT and FT jobs
  if (this.state.ptClick === true && this.state.ftClick === true && this.state.input === '') {
    jobSearchFilter = this.props.jobData.filter((job) => {
     if (job.contract_type === 'FT' || job.contract_type === 'PT') {
       return job;
     }
    });
  }

  //filters for PT and FT jobs that match that keyword
  if (this.state.ptClick === true && this.state.ftClick === true && this.state.input !== '') {
    jobSearchFilter = this.props.jobData.filter((job) => {
      if ((job.contract_type === 'PT' || job.contract_type === 'FT') && job.organization.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        return job;
      }
      if ((job.contract_type === 'PT' || job.contract_type === 'FT') && job.location.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        return job;
      }
      if ((job.contract_type === 'PT' || job.contract_type === 'FT') && job.job_title.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        return job;
      }
    }); 
  }

    return (
      <div>
        <div className="row">
        <form className="col-4">
          <label htmlFor="search_input">Search</label>
          <input
          id="search_input"
          className="search_input"
          type="text"
          onChange={(e) => {
            this.handleChange(e);
          }}>
          </input>

          <br/>

          <label htmlFor="checkbox">Contract Type</label>
          <br/>
          <input
          id="checkbox"
          type="checkbox"
          name="part_time_checkbox"
          checked={this.state.ptClick}
          onChange={this.handlePtClick}
          value={this.state.ptClick}>
          </input> Part-time
          <br/>
          <input
          id="checkbox"
          type="checkbox"
          name="full_time_checkbox"
          checked={this.state.ftClick}
          onChange={this.handleFtClick}
          value={this.state.ftClick}>
          </input> Full-time
        </form>
        <div className="col-8">
          <JobList filteredList={jobSearchFilter} />
        </div>
      </div> 
    </div>
    );
  }
}

export default FilterForm;