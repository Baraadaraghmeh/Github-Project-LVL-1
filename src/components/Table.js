import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
      
      <div style={{ border: '3px green dotted' }}>
        
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Title</th>
      <th scope="col">Language</th>
      <th scope="col">check</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th> 
      <td>T1</td>
      <td>L1</td>
      <td>checkbox</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>T2</td>
      <td>L2</td>
      <td>checkbox</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>T3</td>
      <td>L3</td>
      <td>checkbox</td>
    </tr>
  </tbody>
</table>
      </div>
    );
  }
}
