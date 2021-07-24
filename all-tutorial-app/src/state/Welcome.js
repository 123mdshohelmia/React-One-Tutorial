import React, { Component } from 'react';

export default class Welcome extends Component {

    constructor(){
        super()
        this.state={
            name='Md. Shohel Mia'
        }
    }
  render() {
    return (
      <div>
          <h1>Welcome {this.state.name}</h1>
      </div>
    );
  }
}
