import React, {useState} from 'react';
import dataItems from '../../config/dataItems';
import CreateEmployee from '../CreateEmployee';
import { connect } from "react-redux";

import './style.css';


const EmployeeHeader = ({updateFilters}) =>{

    const [ showCreateEmployeeModal,setShowCreateEmployeeModal] = useState(false)
    const [filterState,setFilterState] = useState({selectedKey:'id',value: ''})

    const onFilterChange = (event) =>{
        setFilterState({...filterState,value: event.target.value})
        updateFilters({...filterState,value: event.target.value})
    }
    const onDropDownChange = (event) => {
        setFilterState({selectedKey:event.target.value,value: ''})
        updateFilters({selectedKey:event.target.value,value: ''})
    }
  return (
      <>
        <div className='employee-header-container'>
            <div className='employee-label'> Employee</div> 
            <div className='create-emp-btn' onClick={()=>setShowCreateEmployeeModal(true)}>Create Employee</div>
        </div>
        <div className='search-bar-container'>
        <select onChange={onDropDownChange}>
            {dataItems.filter(({searchable}) => searchable).map( ({name,attributeName}) => <option value={attributeName}>{name}</option>)}
        </select>
        <input type='text' value={filterState.value} onChange={onFilterChange}/>
        </div>
        {showCreateEmployeeModal && <CreateEmployee hideModal={()=>setShowCreateEmployeeModal(false)}/>}
      </>
    
  );
}

function mapDispatchToProps(dispatch) {
    return {
      updateFilters : (filters) => dispatch({
        type: 'UPDATE_FILTERS',
        payload : filters
      })
    }
    
  }
  
  export default connect(null,mapDispatchToProps)(EmployeeHeader);

