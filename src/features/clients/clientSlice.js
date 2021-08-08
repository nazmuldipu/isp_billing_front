import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../../store/api'

const slice = createSlice({
    name: 'clients',
    initialState: {
        page: {},
        error: "",
        loading: false,
        lastFetch: null
    },
    reducers: {
        clientsRequested: (clients, action) => {
            clients.error = "";
            clients.loading = true;
        },
        clientsReceived: (clients, action) => {
            clients.page = action.payload
            clients.loading = false;
            clients.lastFetch = Date.now();
        },
        clientsRequestFailed: (clients, action) => {
            clients.error = action.payload;
            clients.loading = false;
        },
        clientAdded: (clients, action) => {
            clients.page.docs.push(action.payload)
        },
        clientUpdated: (clients, action) => {
            const index = clients.page.docs.findIndex(c => c._id === action.payload._id);
            clients.page.docs.splice(index, 1, action.payload);
        }
    }
})

export const {
    clientAdded,
    clientUpdated,
    clientsReceived,
    clientsRequested,
    clientsRequestFailed
} = slice.actions;
export default slice.reducer;

//Action creators
const url = "/clients";
export const loadClients = ({ page, limit, sort, order, param }) => (dispatch) => {
    dispatch(apiCallBegan({
        url: url + `?page=${page}&limit=${limit}&sort=${sort}&order=${order}&param=${param}`,
        onStart: clientsRequested.type,
        onSuccess: clientsReceived.type,
        onError: clientsRequestFailed.type
    }));
};

export const saveClient = (client) => apiCallBegan({
    url,
    method: 'post',
    data: client,
    onStart: clientsRequested.type,
    onSuccess: clientAdded.type,
    onError: clientsRequestFailed.type
})

export const updateClient = (id, client) => apiCallBegan({
    url: url + `/${id}`,
    method: 'put',
    data: client,
    onStart: clientsRequested.type,
    onSuccess: clientUpdated.type,
    onError: clientsRequestFailed.type
})