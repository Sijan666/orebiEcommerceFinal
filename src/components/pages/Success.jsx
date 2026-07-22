import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiCheck, FiShoppingBag, FiCopy, FiMapPin } from "react-icons/fi";

const Success = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const paymentMethod = location.state?.paymentMethod || 'card'; 
    const courier = location.state?.courier || 'Pathao Express';
    const city = location.state?.city || 'Dhaka';

    const [orderNumber, setOrderNumber] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const newOrderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOrderNumber(newOrderNumber);
        
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        setOrderDate(formattedDate);

        const existingOrders = JSON.parse(localStorage.getItem("premiumOrders")) || {};
        
        if (!existingOrders[newOrderNumber]) {
            existingOrders[newOrderNumber] = {
                date: formattedDate,
                courier: courier,
                city: city,
                status: "Processing"
            };
            localStorage.setItem("premiumOrders", JSON.stringify(existingOrders));
        }

    }, [courier, city]);

    const handleCopy = () => {
        navigator.clipboard.writeText(orderNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[#fafafa] min-h-[80vh] flex items-center justify-center px-4 font-sans py-12">
            <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl border border-gray-100 max-w-2xl w-full text-center relative overflow-hidden animate-[fade-in_0.5s_ease-out]">
                <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
                <div className="mx-auto w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 shadow-md">
                    <FiCheck className="text-white text-3xl font-bold" />
                </div>
                <h1 className="text-3xl font-semibold text-gray-900 mb-2 tracking-tight">Order Confirmed</h1>
                <p className="text-gray-500 text-sm mb-10 leading-relaxed px-4">
                    {paymentMethod === 'cod' 
                        ? "Thank you for your purchase! We've received your order. Please keep the exact amount ready upon delivery." 
                        : "Thank you for your purchase! We've received your order and will send an email with shipping details shortly."}
                </p>
                <div className="bg-[#f8f9fa] rounded-xl p-5 mb-4 text-left border border-gray-100">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-3">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Token / Order No.</span>
                        <div 
                            onClick={handleCopy}
                            className="flex items-center gap-2 cursor-pointer group"
                            title="Copy Order Number"
                        >
                            <span className="text-sm font-bold text-black border-b border-transparent group-hover:border-black transition-colors">
                                {orderNumber}
                            </span>
                            {copied ? (
                                <span className="text-[10px] bg-black text-white px-1.5 py-0.5 rounded">Copied!</span>
                            ) : (
                                <FiCopy className="text-gray-400 group-hover:text-black transition-colors" />
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-3">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Selected Courier</span>
                        <span className="text-sm font-bold text-gray-900">{courier}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-3">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Date</span>
                        <span className="text-sm font-medium text-gray-900">{orderDate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Payment Status</span>
                        {paymentMethod === 'cod' ? (
                            <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md">Pending (COD)</span>
                        ) : (
                            <span className="text-xs font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-md">Successful</span>
                        )}
                    </div>
                </div>
                <p className="text-xs text-gray-400 mb-8 px-4">
                    * Please save your Token / Order No. to track your delivery status later.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                        to="/shop" 
                        className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all active:scale-[0.98]"
                    >
                        <FiShoppingBag className="text-lg" /> 
                        Continue Shopping
                    </Link>
                    <button 
                        onClick={() => navigate('/track', { state: { orderId: orderNumber } })}
                        className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-black text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-gray-900 transition-all shadow-sm active:scale-[0.98]"
                    >
                        <FiMapPin className="text-lg" />
                        Track Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Success;