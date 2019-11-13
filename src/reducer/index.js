import { bindActionCreators } from "redux";

const employeeManagement = (state = {
    employeesList: [],
    nextId: 1,
    filters: {
      selectedKey: 'id',
      value: ''
    }
}, action) => {
    switch(action.type) {
       case 'INITILIZE_EMPLOYEES':
          const {nextId,employeesList} = action.payload
         return {...state,employeesList, nextId};
     
       case 'UPDATE_EMPLOYEES':
         return {...state,employeesList:action.payload};
      case 'ADD_EMPLOYEE':{
        const {nextId,employeeDetails} = action.payload
         return {...state,employeesList:[...state.employeesList,employeeDetails], nextId};
      }
      case 'UPDATE_FILTERS':{
        return {...state, filters: action.payload}
      }
       default:
         return state;
     }
  };

  export default employeeManagement