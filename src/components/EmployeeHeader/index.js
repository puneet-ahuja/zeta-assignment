import React from 'react';
import dataItems from '../../config/dataItems'
import './style.css';

const EmployeeHeader = ({headerHeight}) =>{
  return (
      <>
        <div className='employee-header-container'>
            <div className='employee-label'> Employee</div>
            <div className='create-emp-btn'>Create Employee</div>
        </div>
        <div className='search-bar-container'>
        <select>
            {dataItems.filter(({searchable}) => searchable).map( ({name}) => <option value={name}>{name}</option>)}
        </select>
        <input type='text'/>
        </div>
      </>
    
  );
}

export default EmployeeHeader;
