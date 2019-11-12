import React from 'react';
import EmployeeHeader from '../EmployeeHeader'
import './style.css';
import Table from '../Table';

const EmployeePortal = ({headerHeight}) =>{
  return (
    <div className="employee-portal-container" >
        <EmployeeHeader/>
        <Table/>
    </div>
  );
}

export default EmployeePortal;
