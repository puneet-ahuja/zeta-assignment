import React, {useEffect} from 'react';
import Header from './components/Header'
import EmployeePortal from './components/EmployeePortal'
import './App.css';
import { connect } from "react-redux";

function App({initilizeList}) {
  useEffect(()=>{
    fetch('https://my-json-server.typicode.com/darshanp40/employeedb/employees')
    .then(res => res.json())
    .then(([employeesList]) => initilizeList(employeesList))
  },[])
  const headerHeight = '50px';
  return (
    <div className="App">
      <Header headerHeight={headerHeight}/>
      <EmployeePortal/>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    initilizeList : (employeesList) => dispatch({
      type: 'INITILIZE_EMPLOYEES',
      payload : employeesList
    })
  }
  
}

export default connect(null,mapDispatchToProps)(App);
