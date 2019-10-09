import React, { Component } from 'react';
import Add from './components/Add';
import Table from './components/Table';
import Repo from './components/Repo';


export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: 'Array',
        status: 'Private',
        language: 'HTML'
      },
      {
        id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'
      }
    ]
  };
  render() {
    
    
    return (
      <div style={{ border: 'black 1px solid' }}>
        <h6>App</h6>
      const{id,title,status,language}={this.state}   

        <Add row={item.title}></Add>

        <Table></Table>
        <Repo></Repo>
        
        
      </div>
    );
  }
}
