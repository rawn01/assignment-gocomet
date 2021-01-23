import { createSlice } from '@reduxjs/toolkit';

const WishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addItem(state, action) {
            if(!state.includes(action.payload)) {
                state.push(action.payload);
            } 
        },
        removeItem(state, action) {
            const index = state.findIndex((item) => {
                return item.productId === action.payload.productId;
            });

            if(index !== -1) {
                return state.filter((item, idx) => {
                    if(idx === index) {
                        return false;
                    }

                    return true;
                });  
            } 
        }
    }
})

export default WishlistSlice;