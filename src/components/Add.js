import React, { Component } from 'react';

export default class Add extends Component {
  render() {
    return (
      <div style={{ border: '3px orange solid' }}>
        <h6>Add</h6>
        <input placeholder={"enter repo title"} type="text"></input>
        <input placeholder={"enter repo language"} type="text"></input>
        <button> submit</button>
        
      </div>
    );
  }
}
