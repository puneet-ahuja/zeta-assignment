import React from 'react';
import './style.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { connect } from 'react-redux'

const Table = ({employeesList}) =>{
  return (
      <div className='table-style'>
        <TableHeader/>
        {employeesList.map( (data) => <TableRow key={data.id} {...data}/>)}
      </div>
  );
}

function mapStateToProps(state) {
    const {employeesList} = state
  
    return {
      employeesList
    };
  }

export default connect(mapStateToProps)(Table);
