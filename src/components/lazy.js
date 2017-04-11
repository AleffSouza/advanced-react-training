import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Lazy extends Component {
  componentWillMount () {
    this.setState(() => ({
      component: null,
    }));

    this.loadComponent(this.props.load);
  }

  loadComponent(loader) {
    loader((component) => {
      this.setState(() => ({ component }));
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.load !== nextProps.load) {
      this.loadComponent(nextProps.load);
    }
  }

  render () {
    const LoadedComp = this.state.component
    return LoadedComp
      ? <LoadedComp {...this.props} />
      : <h2>Component not loaded...</h2>;
  }
}

Lazy.propTypes = {
  load: PropTypes.func.isRequired,
};