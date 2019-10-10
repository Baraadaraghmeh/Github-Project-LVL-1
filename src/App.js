import React, { Component } from 'react';
import Add from './components/Add';
import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  //function for add repo
  addRepo=(repo)=>{
    let newRepo=this.state.repos
    newRepo.push(repo)
    this.setState({repos:newRepo})
  }



  render() {

    
   

    const {repos}=this.state;
    const {addRepo}=this;
    return (
      <div style={{ border: 'black 1px solid' }}>
       <button onClick={addRepo.bind(this,{id:7,title:"function",status:"puplic",language:"html"})}>Add</button>
       
        <Add/>
        <Table repos={repos}/>
        
        
      </div>
    );
  }
}
