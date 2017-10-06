/* eslint react/no-danger:0 */

import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from '../../../node_modules/prop-types';

import projectDetails from './projects.json';

import './ProjectDetails.css';

const goToProjectsPageIfInvalidName = (props) => {
  if (!projectDetails.projects[props.match.params.name]) {
    props.history.push('/projects');
  }
};

class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { project: projectDetails.projects[this.props.match.params.name] };
  }

  componentWillMount() {
    goToProjectsPageIfInvalidName(this.props);
  }

  componentWillReceiveProps(nextProps) {
    goToProjectsPageIfInvalidName(nextProps);
  }

  render() {
    if (!this.state.project) {
      return <div className="ProjectDetails" />;
    }

    const { project } = this.state;

    return (
      <div className="ProjectDetails">
        <h1>{project.displayName}</h1>
        <span className="links">
          {
            project.url &&
            <span>
              <FontAwesome className="icon" name="arrow-right" tag="i" />
              <a href={project.url}>Live</a>
            </span>
          }
          {
            project.repo &&
            <span>
              <FontAwesome className="icon" name="arrow-right" tag="i" />
              <a href={project.repo}>Repo</a>
            </span>
          }
        </span>
        <img src={project.img} alt={project.displayName} />
        <h2>Description...</h2>
        <p dangerouslySetInnerHTML={{ __html: project.description }} />
        <h2>Tech Used...</h2>
        <p dangerouslySetInnerHTML={{ __html: project.tech }} />
        <h2>What I Learned...</h2>
        <p dangerouslySetInnerHTML={{ __html: project.learned }} />
      </div>
    );
  }
}

ProjectDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProjectDetails;
