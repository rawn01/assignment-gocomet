import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';

const productSlice = createSlice({
    name: "products",
    initialState: data,
    reducers: {
        
    }
})

export default productSlice;