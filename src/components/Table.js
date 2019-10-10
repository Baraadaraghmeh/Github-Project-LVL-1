import React, { Component } from 'react';
import Repo from './Repo';

export default class Table extends Component {
  render() {

      
        return(
          




      <div style={{ border: '3px green dotted'}}>
        
        <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Title</th>
      <th scope="col">Language</th>
      <th scope="col">status</th>
    </tr>
  </thead>
  <tbody>
  {(this.props.repos.map((element,index)=>{
  return <Repo row={element} key={index}/>
}))}  
  </tbody>
</table>
      
      </div>
      
      
        )
  }
}
