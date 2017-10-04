import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import projectDetails from './ProjectDetails.json';

import './ProjectDetail.css';

class ProjectDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { project: projectDetails.projects[this.props.match.params.name] };
  }

  componentWillMount() {
    if (!projectDetails.projects[this.props.match.params.name]) {
        this.props.history.push('/projects');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!projectDetails.projects[nextProps.match.params.name]) {
      nextProps.history.push('/projects');
    }
  }

  render() {
    if (!this.state.project) {
      return <div />;
    }

    return (<div className="ProjectDetail">
      <div className="container">
        <h3>{this.state.project.displayName}</h3>
        <p style={{ marginBottom: '1rem' }}>
          {
            this.state.project.url &&
            <span>
              <FontAwesome className="icon" name="arrow-right" tag="i" />&nbsp;
              <a href={this.state.project.url}>Live</a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          }
          <FontAwesome className="icon" name="arrow-right" tag="i" />&nbsp;
          <a href={this.state.project.repo}>Repo</a>
        </p>
        <img src={this.state.project.img} alt={this.state.project.displayName} />
        <h4>Description</h4>
        <p>{this.state.project.description}</p>
        <h4>Tech Used</h4>
        <p>{this.state.project.tech}</p>
        <h4>What I Learned</h4>
        <p>{this.state.project.learned}</p>
      </div>
    </div>);
  }
}

export default ProjectDetail;
