import React from 'react';

/**
 * React Component to wrap FC for testing with JEST
 * @param {Function} Component - Functional Component to render
 * @param {Object} props - props object for functional component
 */
export class TestWrapper extends React.Component {
  render() {
    return (<this.props.Component {...this.props.props}/>);
  }
}