import React, { Component } from 'react';
import JobList from './JobList';
// import logo from './logo.svg';
// import './App.css';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    //console.log(this.props.jobData);
    //console.log(this.state);

    const jobSearchFilter = this.props.jobData.filter((job) => {
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

   console.log(jobSearchFilter);
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
          // value
          >
          </input> Part-time
          <br/>
          <input
          type="checkbox"
          name="full_time_checkbox"
          // value
          >
          </input> Full-time
      </form>
      <JobList filteredList={jobSearchFilter}/>
      </div>
    );
  }
}

export default FilterForm;