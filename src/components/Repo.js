import React, { Component } from 'react';

export default class Repo extends Component {
  render() {
    const {id,title,language,status} = this.props.row
    return (
      <>
        
        <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{language}</td>
      <td>{status}</td>
    </tr>
      </>
    );
  }
}