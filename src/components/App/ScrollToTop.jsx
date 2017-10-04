import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from '../../../node_modules/prop-types';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(ScrollToTop);
