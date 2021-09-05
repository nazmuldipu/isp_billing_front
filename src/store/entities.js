import { combineReducers } from 'redux';
import companiesReducer from '../features/companies/companiesSlice';
import usersReducer from '../features/users/usersSlice';
import clientsReducer from '../features/clients/clientSlice';
import zonesReducer from '../features/settings/zonesSlice';
import boxesReducer from '../features/settings/boxesSlice';
import packagesReducer from '../features/settings/packagesSlice';

export default combineReducers({
    companies: companiesReducer,
    users: usersReducer,
    clients: clientsReducer,
    zones: zonesReducer,
    boxes: boxesReducer,
    packages: packagesReducer
})