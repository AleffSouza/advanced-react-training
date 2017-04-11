import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const appProps = {
    searchTerm: '',
    onSearchChange: () => {},
    onRequestRobots: () => {},
    isPending: false,
    robots: []
  }
  ReactDOM.render(<App {...appProps} />, div);
});


it('calls onRequestRobots', () => {
  const div = document.createElement('div');
  const appProps = {
    searchTerm: '',
    onSearchChange: () => {},
    onRequestRobots: jest.fn(),
    isPending: false,
    robots: []
  }
  ReactDOM.render(<App {...appProps} />, div);
  expect(appProps.onRequestRobots).toHaveBeenCalled()
})
