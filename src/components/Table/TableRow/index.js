import React from 'react';
import dataItems from '../../../config/dataItems'
import './style.css';

const TableRow = (props) =>{
  return (
      <div className='table-row-container'>
        {dataItems.map( ({id,widthClass,attributeName}) => <div className={widthClass+ ' label'} key={id}>{props[attributeName]}</div>)}
        <div className='wd-50'>...</div>
      </div>
    
  );
}

export default TableRow;
