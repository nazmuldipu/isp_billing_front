import { combineReducers } from 'redux';
// import entitiesReducer from './entities';
import authReducer from '../features/auth/authSlice';
import paginationReducer from './paginateSlice';
// entities: entitiesReducer, 
export default combineReducers({ auth: authReducer, pagination: paginationReducer });