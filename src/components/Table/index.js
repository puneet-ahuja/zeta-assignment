import React from 'react';
import './style.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { connect } from 'react-redux'

const Table = ({employeesList,selectedKey,value}) =>{

  const filteredList = employeesList.filter(
    item => {
      console.log(item)
      return item[selectedKey].toString().startsWith(value)})
  return (
      <div className='table-style'>
        <TableHeader/>
        {filteredList.map( (data) => <TableRow key={data.id} {...data}/>)}
      </div>
  );
}

function mapStateToProps(state) {
    const {employeesList,filters:{selectedKey,value}} = state
  
    return {
      employeesList,
      selectedKey,
      value
    };
  }

export default connect(mapStateToProps)(Table);
