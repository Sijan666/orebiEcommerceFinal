import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/counter/cartSlice";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


    if (cartItems.length === 0) {
        return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty!</h2>
            <Link to="/" className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Go Shopping
            </Link>
        </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                <div className="flex items-center gap-4">
                <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded-md bg-gray-50" />
                <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-500 text-sm">${item.price} x {item.quantity}</p>
                </div>
                </div>
                
                <div className="flex items-center gap-6">
                <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    title="Remove Item"
                >
                    <FiTrash2 className="text-xl" />
                </button>
                </div>
            </div>
            ))}
        </div>
        <div className="mt-8 p-6 bg-gray-50 rounded-xl flex justify-between items-center border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800">Total:</h3>
            <p className="text-2xl font-bold text-black">${totalPrice.toFixed(2)}</p>
        </div>
        </div>
    );
};

export default CartPage;