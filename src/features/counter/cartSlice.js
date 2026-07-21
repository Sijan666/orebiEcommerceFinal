import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
};

const initialState = {
    cartItems: loadCartFromStorage(),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
        const product = action.payload;
        const existingItem = state.cartItems.find((item) => item.id === product.id);
        
        const quantityToAdd = product.quantity || 1;

        if (existingItem) {
            existingItem.quantity += quantityToAdd;
        } else {
            state.cartItems.push({ ...product, quantity: quantityToAdd });
        }

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart: (state, action) => {
        const productId = action.payload;
        state.cartItems = state.cartItems.filter((item) => item.id !== productId);

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        clearCart: (state) => {
        state.cartItems = [];
        localStorage.removeItem("cartItems");
        }
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;