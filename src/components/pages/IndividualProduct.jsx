import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiStar, FiChevronLeft, FiMinus, FiPlus, FiTruck, FiShield } from 'react-icons/fi';
import Container from '../Container';
import Flex from '../Flex';

const ProductInside = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.item; 

    const [quantity, setQuantity] = useState(1);
    const [activeImg, setActiveImg] = useState(product?.thumbnail);

    if (!product) {
        return (
            <Container className="py-20 lg:py-32 px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">No Product Selected!</h2>
                <p className="text-gray-500 mb-8">Please select a product from the shop or search menu.</p>
                <button 
                    onClick={() => navigate('/shop')} 
                    className="px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                    Go to Shop
                </button>
            </Container>
        );
    }

    const handleAddToCart = () => {
        alert(`Added ${quantity} "${product.title}" to cart!`);
    };

    return (
        <div className="bg-white py-10 md:py-16 lg:py-24">
            <Container className="px-4 lg:px-0">
                {/* Back Button */}
                <button 
                    onClick={() => navigate(-1)} 
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-8 font-medium"
                >
                    <FiChevronLeft className="text-lg" /> Back to previous
                </button>

                <Flex className="flex-col lg:flex-row gap-y-10 lg:gap-x-16 items-start">
                    
                    {/* LEFT SIDE: Image Gallery */}
                    <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                            {product.images?.slice(0, 4).map((img, index) => (
                                <div 
                                    key={index} 
                                    onClick={() => setActiveImg(img)}
                                    className={`w-20 h-20 shrink-0 cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${activeImg === img ? 'border-black' : 'border-gray-100 hover:border-gray-300'}`}
                                >
                                    <img src={img} alt="thumbnail" className="w-full h-full object-cover bg-gray-50" />
                                </div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 w-full bg-gray-50 rounded-3xl p-8 flex items-center justify-center border border-gray-100 relative">
                            {/* Stock Badge */}
                            <div className="absolute top-6 left-6 bg-black text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                {product.availabilityStatus || 'In Stock'}
                            </div>
                            <img src={activeImg} alt={product.title} className="w-full max-h-[400px] object-contain hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* RIGHT SIDE: Product Details */}
                    <div className="w-full lg:w-1/2 lg:py-5">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{product.category}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{product.brand || 'Generic'}</span>
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center text-[#FFC700]">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} className={i < Math.round(product.rating) ? "fill-current" : "text-gray-300"} />
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 font-medium">({product.rating} Rating)</p>
                        </div>

                        <div className="flex items-end gap-3 mb-6 border-b border-gray-100 pb-6">
                            <p className="text-4xl font-bold text-black">${product.price}</p>
                            <p className="text-lg text-gray-400 line-through mb-1 font-medium">
                                ${Math.round(product.price * (1 + (product.discountPercentage || 0) / 100))}
                            </p>
                            {product.discountPercentage && (
                                <div className="ml-2 bg-red-100 text-red-600 text-xs font-bold px-2.5 py-1 rounded-md mb-1.5">
                                    {Math.round(product.discountPercentage)}% OFF
                                </div>
                            )}
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Quantity & Add to Cart */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            {/* Quantity Selector */}
                            <div className="flex items-center justify-between w-full sm:w-36 bg-gray-50 border border-gray-200 rounded-full px-4 py-3.5">
                                <button 
                                    onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
                                    className="text-gray-500 hover:text-black transition-colors p-1"
                                >
                                    <FiMinus />
                                </button>
                                <span className="font-bold text-lg">{quantity}</span>
                                <button 
                                    onClick={() => setQuantity(prev => prev < (product.stock || 10) ? prev + 1 : prev)}
                                    className="text-gray-500 hover:text-black transition-colors p-1"
                                >
                                    <FiPlus />
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button 
                                onClick={handleAddToCart}
                                className="flex-1 flex items-center justify-center gap-2 bg-black text-white font-bold text-lg rounded-full py-3.5 hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <FiShoppingCart className="text-xl" /> Add to Cart
                            </button>
                        </div>

                        {/* Extra Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-sm shrink-0">
                                    <FiTruck className="text-lg" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Free Shipping</p>
                                    <p className="text-xs text-gray-500">Orders over $50</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-sm shrink-0">
                                    <FiShield className="text-lg" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">1 Year Warranty</p>
                                    <p className="text-xs text-gray-500">100% Secure Checkout</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Flex>
            </Container>
        </div>
    );
};

export default ProductInside;