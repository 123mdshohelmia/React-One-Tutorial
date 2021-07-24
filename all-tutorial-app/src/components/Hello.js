import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div>
          <h1>I am form {this.props.name}</h1>
      </div>
    );
  }
}
