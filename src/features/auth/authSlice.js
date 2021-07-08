import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../../store/api'
import { setToken } from '../../store/middleware/api';
import jwtDecode from "jwt-decode";

const tokenKey = "token";

const slice = createSlice({
    name: 'auth',
    initialState: {
        token: "",
        error: "",
        loading: false,
        registered: false
    },
    reducers: {
        loggedIn: (auth, action) => {
            auth.loading = false;
            auth.error = "";
            auth.token = action.payload.token;
            setToken(action.payload.token);
            localStorage.setItem(tokenKey, auth.token);
        },
        registered: (auth, action)=>{
            auth.loading = false;
            auth.registered = true;
        }, 
        loggedOut: (auth, action) => {
            auth.token = "";
            auth.error = "";
            setToken("");
            localStorage.removeItem(tokenKey);
        },
        apiRequested: (auth, action) => {
            auth.error = "";
            auth.loading = true;
        },
        apiRequestFailed: (auth, action) => {
            auth.loading = false;
            auth.error = action.payload;
        },
    }
})

export const { loggedIn, registered, loggedOut, apiRequested, apiRequestFailed } = slice.actions;

//Action creators
const url = "/auth";
const regUrl = '/users';
export const login = (credential) => apiCallBegan({
    url,
    method: 'post',
    data: credential,
    onStart: apiRequested.type,
    onSuccess: loggedIn.type,
    onError: apiRequestFailed.type
})

export const register = (data) => apiCallBegan({
    url: regUrl,
    method: 'post',
    data,
    onStart: apiRequested.type,
    onSuccess: registered.type,
    onError: apiRequestFailed.type
})

export const getToken = (dispatch, state) => {
    const token = localStorage.getItem(tokenKey);
    if (token && !state.auth.token) {
        dispatch({ type: loggedIn.type, payload: { token: token } })
    }
    return token;
};

export const getErrorMessage = (state) => {
    return state.auth.error
}

export const isAuth = (dispatch, state) => {
    const token = localStorage.getItem(tokenKey);
    if (token && !state.auth.token) {
        dispatch({ type: loggedIn.type, payload: { token: token } })
    }
    return !!token;
}

export const getCurrentUser = (state) => {
    return jwtDecode(state.auth.token);
}


export default slice.reducer;