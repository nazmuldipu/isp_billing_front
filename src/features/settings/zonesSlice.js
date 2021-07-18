import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../../store/api'

const slice = createSlice({
    name: 'zones',
    initialState: {
        page: {},
        loading: false,
        lastFetch: null
    },
    reducers: {
        zonesRequested: (zones, action) => {
            zones.loading = true;
        },
        zonesReceived: (zones, action) => {
            zones.page = action.payload
            zones.loading = false;
            zones.lastFetch = Date.now();
        },
        zonesRequestFailed: (zones, action) => {
            zones.loading = false;
        },
        zoneAdded: (zones, action) => {
            zones.page.docs.push(action.payload)
        },
        zoneUpdated: (zones, action) => {
            const index = zones.page.docs.findIndex(c => c._id === action.payload._id);
            zones.page.docs.splice(index, 1, action.payload);
        }
    }
})

const {
    zoneAdded,
    zoneUpdated,
    zonesReceived,
    zonesRequested,
    zonesRequestFailed
} = slice.actions;
export default slice.reducer;

//Action creators
const url = "/zones";
export const loadZones = ({ page, limit, sort, order, param }) => (dispatch) => {
    dispatch(apiCallBegan({
        url: url + `?page=${page}&limit=${limit}&sort=${sort}&order=${order}&param=${param}`,
        onStart: zonesRequested.type,
        onSuccess: zonesReceived.type,
        onError: zonesRequestFailed.type
    }));
};

export const saveZone = (zone) => apiCallBegan({
    url,
    method: 'post',
    data: zone,
    onStart: zonesRequested.type,
    onSuccess: zoneAdded.type,
    onError: zonesRequestFailed.type
})

export const updateZone = (id, zone) => apiCallBegan({
    url: url + `/${id}`,
    method: 'put',
    data: zone,
    onStart: zonesRequested.type,
    onSuccess: zoneUpdated.type,
    onError: zonesRequestFailed.type
})
