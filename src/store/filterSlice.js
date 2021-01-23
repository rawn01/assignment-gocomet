import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        searchText: "",
        gender: "none",
        price: [false, false, false, false],
        color: [],
        sort: "none"
    },
    reducers: {
        setSearchText(state, action) {
            return {
                ...state,
                searchText: action.payload
            }
        },
        setGender(state, action) {
            return {
                ...state,
                gender: action.payload
            }
        },
        setPrice(state, action) {
            return {
                ...state,
                price: state.price.concat(action.payload)
            }
        },
        setSort(state, action) {
            return {
                ...state,
                sort: action.payload
            }
        }
    }
})

export default filterSlice;