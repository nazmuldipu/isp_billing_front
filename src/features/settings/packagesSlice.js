import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../../store/api'

const slice = createSlice({
    name: 'packages',
    initialState: {
        page: {},
        error: "",
        loading: false,
        lastFetch: null
    },
    reducers: {
        packagesRequested: (packages, action) => {
            packages.error = "";
            packages.loading = true;
        },
        packagesReceived: (packages, action) => {
            packages.page = action.payload
            packages.loading = false;
            packages.lastFetch = Date.now();
        },
        packagesRequestFailed: (packages, action) => {
            packages.error = action.payload;
            packages.loading = false;
        },
        packageAdded: (packages, action) => {
            packages.page.docs.push(action.payload)
        },
        packageUpdated: (packages, action) => {
            const index = packages.page.docs.findIndex(c => c._id === action.payload._id);
            packages.page.docs.splice(index, 1, action.payload);
        }
    }
})

const {
    packageAdded,
    packageUpdated,
    packagesReceived,
    packagesRequested,
    packagesRequestFailed
} = slice.actions;
export default slice.reducer;

//Action creators
const url = "/packages";
export const loadPackages = ({ page, limit, sort, order, param }) => (dispatch) => {
    dispatch(apiCallBegan({
        url: url + `?page=${page}&limit=${limit}&sort=${sort}&order=${order}&param=${param}`,
        onStart: packagesRequested.type,
        onSuccess: packagesReceived.type,
        onError: packagesRequestFailed.type
    }));
};

export const savePackages = (packages) => apiCallBegan({
    url,
    method: 'post',
    data: packages,
    onStart: packagesRequested.type,
    onSuccess: packageAdded.type,
    onError: packagesRequestFailed.type
})

export const updatePackages = (id, packages) => apiCallBegan({
    url: url + `/${id}`,
    method: 'put',
    data: packages,
    onStart: packagesRequested.type,
    onSuccess: packageUpdated.type,
    onError: packagesRequestFailed.type
})
