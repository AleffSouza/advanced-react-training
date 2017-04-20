import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Lazy extends Component {
  componentWillMount() {
    this.setState({ component: null })
  }

  render() {
    return <h2>component not loaded</h2>
  }
}

Lazy.propTypes = {
  load: PropTypes.func.isRequired,
};