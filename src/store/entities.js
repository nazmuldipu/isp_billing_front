import { combineReducers } from 'redux';
import companiesReducer from '../features/companies/companiesSlice';
import usersReducer from '../features/users/usersSlice';
import clientsReducer from '../features/clients/clientSlice';
import zonesReducer from '../features/settings/zonesSlice';
// import classesReducer from '../features/classes/classesSlice';
// import studentsReducer from '../features/students/studentsSlice';

export default combineReducers({
    companies: companiesReducer,
    users: usersReducer,
    clients: clientsReducer,
    zones: zonesReducer
    // classes: classesReducer,
    // students: studentsReducer
})