import { combineReducers } from 'redux';
import companiesReducer from '../features/companies/companiesSlice';
import usersReducer from '../features/users/usersSlice';
import clientsReducer from '../features/clients/clientSlice';
// import classesReducer from '../features/classes/classesSlice';
// import studentsReducer from '../features/students/studentsSlice';

export default combineReducers({
    companies: companiesReducer,
    users: usersReducer,
    clients: clientsReducer
    // classes: classesReducer,
    // students: studentsReducer
})