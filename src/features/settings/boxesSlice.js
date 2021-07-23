import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../../store/api'

const slice = createSlice({
    name: 'boxes',
    initialState: {
        page: {},
        error: "",
        loading: false,
        lastFetch: null
    },
    reducers: {
        boxesRequested: (boxes, action) => {
            boxes.error = "";
            boxes.loading = true;
        },
        boxesReceived: (boxes, action) => {
            boxes.page = action.payload
            boxes.loading = false;
            boxes.lastFetch = Date.now();
        },
        boxesRequestFailed: (boxes, action) => {
            boxes.error = action.payload;
            boxes.loading = false;
        },
        boxAdded: (boxes, action) => {
            boxes.page.docs.push(action.payload)
        },
        boxUpdated: (boxes, action) => {
            const index = boxes.page.docs.findIndex(c => c._id === action.payload._id);
            boxes.page.docs.splice(index, 1, action.payload);
        }
    }
})

const {
    boxAdded,
    boxUpdated,
    boxesReceived,
    boxesRequested,
    boxesRequestFailed
} = slice.actions;
export default slice.reducer;

//Action creators
const url = "/boxes";
export const loadBoxes = ({ page, limit, sort, order, param }) => (dispatch) => {
    dispatch(apiCallBegan({
        url: url + `?page=${page}&limit=${limit}&sort=${sort}&order=${order}&param=${param}`,
        onStart: boxesRequested.type,
        onSuccess: boxesReceived.type,
        onError: boxesRequestFailed.type
    }));
};

export const saveBox = (box) => apiCallBegan({
    url,
    method: 'post',
    data: box,
    onStart: boxesRequested.type,
    onSuccess: boxAdded.type,
    onError: boxesRequestFailed.type
})

export const updateBox = (id, box) => apiCallBegan({
    url: url + `/${id}`,
    method: 'put',
    data: box,
    onStart: boxesRequested.type,
    onSuccess: boxUpdated.type,
    onError: boxesRequestFailed.type
})
