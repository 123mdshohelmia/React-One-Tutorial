import React, { Component } from 'react';

export default class BtnC extends Component {
    doThis(event){
        // alert("I am class components")
        alert(event)
    }
  render() {
    return (
      <div>
          <h1>I am from class components</h1>
          <button onClick={this.doThis.bind(this,"Class component parameter")}>Click Me</button>
      </div>
    );
  }
}


