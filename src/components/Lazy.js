import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lazy extends Component {
  componentWillMount() {
    this.setState(() => ({ component: null }))
    this.props.load(component => {
      this.setState(() => ({ component }))
    })
  }

  render() {
    const LoadedComponent = this.state.component
    return LoadedComponent
      ? <LoadedComponent {...this.props} />
      : <h2>Component not loaded...</h2>
  }
}

Lazy.propTypes = {
  load: PropTypes.func.isRequired,
}

export default load => props => <Lazy load={load} {...props} />