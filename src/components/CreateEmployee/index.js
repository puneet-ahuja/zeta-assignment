import React, {useState} from 'react';
import './style.css';
import { connect } from "react-redux";

const CreateEmployee = ({nextId, addEmployee, hideModal}) =>{

    const [state , setState] = useState({
        jobTitleName: "",
        firstName: "",
        lastName: "",
        preferredFullName: "",
        region: "",
        dob: "",
        phoneNumber: "",
        emailAddress: ""
        })

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const clearHandler = () => {
        setState({
            jobTitleName: "",
            firstName: "",
            lastName: "",
            preferredFullName: "",
            region: "",
            dob: "",
            phoneNumber: "",
            emailAddress: ""
            })
    }

    const addEmployeeHandler = () => {
        const {jobTitleName,firstName,lastName,preferredFullName,region,dob,phoneNumber,emailAddress}=state
        if(jobTitleName &&
        firstName &&
        lastName &&
        preferredFullName &&
        region &&
        dob &&
        phoneNumber &&
        emailAddress){
            addEmployee({...state,id:nextId,employeeCode: 'E'+nextId},nextId+1)
            setShowErrorMessage(false)
            hideModal()
        }
        else {
            setShowErrorMessage(true)
        }
       
    }

  return (
      <>
        <div className='overlay' />
        <div className='create-employee-container'>
            <div className='create-employee-label'>Create Employee</div>
            { showErrorMessage && <div className='row error-message'>
               Please Fill All the employeeDetails
            </div>}
            <div className='row'>
                <label className='label-form'>First Name</label>
                    <input type='text' className='text-box' value={state.firstName} onChange={(event)=>setState({...state,firstName:event.target.value,preferredFullName: event.target.value + ' ' + state.lastName})}/>
            </div>
            <div className='row'>
                <label className='label-form' >Last Name</label>
                    <input type='text' className='text-box' value={state.lastName} onChange={(event)=>setState({...state,lastName:event.target.value,preferredFullName:  state.firstName + ' ' + event.target.value})}/>
            </div>
            <div className='row'>
                <label className='label-form'>Job Title</label>
                    <input type='text' className='text-box' value={state.jobTitleName} onChange={(event)=>setState({...state, jobTitleName: event.target.value})}/>
            </div>
            <div className='row'>
                <label className='label-form'>Email</label>
                    <input type='text' className='text-box' value={state.emailAddress} onChange={(event)=>setState({...state, emailAddress: event.target.value})}/>
            </div>
            <div className='row'>
                <label className='label-form'>Phone Number</label>
                    <input type='text' className='text-box' value={state.phoneNumber} onChange={(event)=>setState({...state, phoneNumber: event.target.value})}/>
            </div>
            <div className='row'>
                <label className='label-form'>Region</label>
                    <input type='text' className='text-box' value={state.region} onChange={(event)=>setState({...state, region: event.target.value})}/>
            </div>
            <div className='row'>
                <label className='label-form'>DOB</label>
                    <input type='text' className='text-box' value={state.dob} onChange={(event)=>setState({...state, dob: event.target.value})}/>
            </div>

            <div className='row'>
                <div className='save-btn btn' onClick={addEmployeeHandler}>Save</div>
                <div className='clear-btn btn' onClick={clearHandler}>Clear</div>
                <div className='clear-btn btn' onClick={hideModal}>Close</div>
            </div>

        </div>
      </>
    
  );
}

function mapStateToProps(state) {
    const {nextId} = state
  
    return {
      nextId
    };
  }

function mapDispatchToProps(dispatch) {
    return {
      addEmployee : (employeeDetails,nextId) => dispatch({
        type: 'ADD_EMPLOYEE',
        payload : {employeeDetails, nextId}
      })
    }
    
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CreateEmployee);
