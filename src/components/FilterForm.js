import React, { Component } from 'react';
import JobList from './JobList';
import './FilterForm.css';

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
    //filters for job by company name, location, or job title
    let jobSearchFilter = this.props.jobData.filter((job) => (
      job.organization.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()
      ?
        job
      :
      job.location.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()
      ?
        job
      :    
      job.job_title.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase() 
      ?
        job
      : 
      null    
    ));

   //filters for PT jobs that match that keyword
   if (this.state.input !== '' && this.state.ptClick === true) {
    jobSearchFilter = this.props.jobData.filter((job) => (
      job.contract_type === 'PT' && job.organization.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()
      ?
        job
      :
      job.contract_type === 'PT' && job.location.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()
      ?
        job
      :
      job.contract_type === 'PT' && job.job_title.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()
      ?
      job
      :
      null
    )); 
  }

  //filters for FT jobs that match that keyword
  if (this.state.input !== '' && this.state.ftClick === true) {
    jobSearchFilter = this.props.jobData.filter((job) => (
      job.contract_type === 'FT' && job.organization.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()
      ?
        job
      :
      job.contract_type === 'FT' && job.location.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()
      ?
        job
      :
      job.contract_type === 'FT' && job.job_title.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()
      ?
        job
      :
      null
    )); 
  }

  //filters for all PT jobs
  if (this.state.ptClick === true && this.state.input === '') {
    jobSearchFilter = this.props.jobData.filter((job) => (
     job.contract_type === 'PT'
     ?
      job
     :
     null
    ));
  }

   //filters for all FT jobs
   if (this.state.ftClick === true && this.state.input === '') {
    jobSearchFilter = this.props.jobData.filter((job) => (
     job.contract_type === 'FT'
     ?
      job
     :
     null
    ));
  }

  //filters for all PT and FT jobs
  if (this.state.ptClick === true && this.state.ftClick === true && this.state.input === '') {
    jobSearchFilter = this.props.jobData.filter((job) => (
     job.contract_type === 'FT' || job.contract_type === 'PT'
      ?
       job
      :
      null
    ));
  }

  //filters for PT and FT jobs that match that keyword
  if (this.state.ptClick === true && this.state.ftClick === true && this.state.input !== '') {
    jobSearchFilter = this.props.jobData.filter((job) => (
      (job.contract_type === 'PT' || job.contract_type === 'FT') && job.organization.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()
        ?
        job
      :
      (job.contract_type === 'PT' || job.contract_type === 'FT') && job.location.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()
        ?
         job
      :
      (job.contract_type === 'PT' || job.contract_type === 'FT') && job.job_title.slice(0, this.state.input.length).toLowerCase() === this.state.input.toLowerCase()
       ?
       job
      :
      null
    )); 
  }
    return (
      <div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
          <div className="panel-default border rounded">
            <div className="panel-heading">
              <h6 className="panel-title">Filters</h6>
            </div>
            <div className="panel-body">
              <form className="form-container">
                <label className="font-weight-bold search-input-label" htmlFor="search-input">Search</label> <br/>
                <input
                id="search-input"
                className="search-input form-control"
                type="text"
                onChange={(e) => {
                  this.handleChange(e);
                }}>
                </input>

                <br/>

                <label className="font-weight-bold" htmlFor="checkbox">Contract Type</label>
                <br/>
                <input
                id="checkbox"
                type="checkbox"
                name="part-time-checkbox"
                checked={this.state.ptClick}
                onChange={this.handlePtClick}
                value={this.state.ptClick}>
                </input> Part-time
                <br/>
                <input
                id="checkbox"
                type="checkbox"
                name="full-time-checkbox"
                checked={this.state.ftClick}
                onChange={this.handleFtClick}
                value={this.state.ftClick}>
                </input> Full-time
              </form>
            </div>
            </div>
          </div>
        <div className="col-md-6 col-lg-8">
          <JobList filteredList={jobSearchFilter} />
        </div>
      </div> 
    </div>
    );
  }
}

export default FilterForm;