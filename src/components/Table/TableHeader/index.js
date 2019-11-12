import React from 'react';
import dataItems from '../../../config/dataItems'
import './style.css';

const TableHeader = () =>{
  return (
      <div className='table-header-container'>
        {dataItems.map( ({id,name,widthClass}) => <div className={widthClass} key={id}>{name}</div>)}
        <div className='wd-50'/>
      </div>
    
  );
}

export default TableHeader;
