import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/jobs';
import Filters from './Filters';


export class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }
  render() {
    return (
      <div>
        <Filters jobs={this.props.data} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect (mapStateToProps)(App);
