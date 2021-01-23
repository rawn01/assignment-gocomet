import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addItemToCart(state, action) {
            if(!state.includes(action.payload)) {
                state.push(action.payload);
            } 
        },
        removeItemFromCart(state, action) {
            const index = state.findIndex((item) => {
                return item.productId === action.payload.productId;
            });

            console.log(index, "i");

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

export default CartSlice;