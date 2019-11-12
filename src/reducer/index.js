const employeeManagement = (state = {
    employeesList: []
}, action) => {
    switch(action.type) {
       case 'INITILIZE_EMPLOYEES':
         return {...state,employeesList:action.payload};
     
       case 'UPDATE_EMPLOYEES':
         return {...state,employeesList:action.payload};
       default:
         return state;
     }
  };

  export default employeeManagement