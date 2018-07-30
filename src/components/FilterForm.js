import React, { Component } from 'react';
import JobList from './JobList';
// import logo from './logo.svg';
// import './App.css';

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
    //console.log(this.props.jobData);
    console.log(this.state);

    //filters for keyword in company name, job title, or location
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

   //filters for pt jobs that match that keyword
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

  //filters for ft jobs that match that keyword
  if (this.state.input !== '' && this.state.ftClick === true) {
    jobSearchFilter = this.props.jobData.filter((job) => {
      if (job.contract_type === 'FT' && job.organization.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        console.log('heyyyyyyy');
        return job;
      }
      if (job.contract_type === 'FT' && job.location.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        console.log('heyyyyyyy');
        return job;
      }
      if (job.contract_type === 'FT' && job.job_title.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) {
        console.log('heyyyyyyy');
        return job;
      }
    }); 
  }

   //console.log(jobSearchFilter);

  //  let jobContractFilter;

  // if (this.state.input !== '' && this.state.ptClick === true) {
  //   jobSearchFilter = this.props.jobData.filter((job) => {
  //     if ((job.organization.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) && job.contract_type === 'PT') {
  //       console.log('hi');
  //       return job;
  //     }
  //   });
  // }

  // if (this.state.input !== '' && this.state.ftClick === true) {
  //   jobSearchFilter = this.props.jobData.filter((job) => {
  //     if ((job.organization.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()) && job.contract_type === 'FT') {
  //       console.log('hi!!!!!');
  //       return job;
  //     }
  //   });
  // }
  
  //filters for all pt jobs
   if (this.state.ptClick === true && this.state.input === '') {
     jobSearchFilter = this.props.jobData.filter((job) => {
      if (job.contract_type === 'PT') {
        return job;
      }
     });
   }

   //filters for all ft jobs
   if (this.state.ftClick === true && this.state.input === '') {
    jobSearchFilter = this.props.jobData.filter((job) => {
     if (job.contract_type === 'FT') {
       return job;
     }
    });
  }

  //filters for all pt and ft jobs
  if (this.state.ptClick === true && this.state.ftClick === true) {
    jobSearchFilter = this.props.jobData.filter((job) => {
     if (job.contract_type === 'FT' || job.contract_type === 'PT') {
       return job;
     }
    });
  }

   //console.log(jobContractFilter);
    return (
      <div>
      <form>
          <label>Search</label>
          <input
          id="search_input"
          className="search_input"
          type="text"
          onChange={(e) => {
            this.handleChange(e);
          }}
          >
          </input>

          <br/>

          <label>Contract Type</label>
          <br/>
          <input
          type="checkbox"
          name="part_time_checkbox"
          checked={this.state.ptClick}
          onChange={this.handlePtClick}
          value={this.state.ptClick}
          >
          </input> Part-time
          <br/>
          <input
          type="checkbox"
          name="full_time_checkbox"
          checked={this.state.ftClick}
          onChange={this.handleFtClick}
          value={this.state.ftClick}
          // value
          >
          </input> Full-time
      </form>
      <JobList filteredList={jobSearchFilter} />
      </div>
    );
  }
}

export default FilterForm;