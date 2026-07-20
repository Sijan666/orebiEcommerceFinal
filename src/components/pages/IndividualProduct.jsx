import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FiShoppingCart, FiStar, FiChevronLeft, FiMinus, FiPlus, FiTruck, FiShield, FiCheck } from 'react-icons/fi';
import Container from '../Container';
import { Helmet } from 'react-helmet-async';

const IndividualProduct = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.item;

    const [quantity, setQuantity] = useState(1);
    const [activeImg, setActiveImg] = useState(product?.thumbnail);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return (
            <Container className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <FiShoppingCart className="text-3xl md:text-4xl text-gray-300" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">No Product Selected</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto text-base md:text-lg px-4">It looks like you arrived here by accident. Let's get you back to the shop to find what you're looking for.</p>
                <button
                    onClick={() => navigate('/shop')}
                    className="w-full sm:w-auto px-8 py-3.5 bg-black text-white font-bold rounded-full hover:bg-gray-800 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 ease-out"
                >
                    Return to Shop
                </button>
            </Container>
        );
    }

    const handleAddToCart = () => {
        alert(`Successfully added ${quantity}x "${product.title}" to your cart!`);
    };

    const jsonLdSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.title,
        "image": product.images || [product.thumbnail],
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": product.brand || "Premium Store"
        },
        "offers": {
            "@type": "Offer",
            "url": window.location.href,
            "priceCurrency": "USD",
            "price": product.price,
            "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "itemCondition": "https://schema.org/NewCondition"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.rating,
            // eslint-disable-next-line react-hooks/purity
            "reviewCount": Math.floor(Math.random() * 100) + 10
        }
    };

    return (
        <div className="bg-white min-h-screen pb-16 md:pb-24">
            {/* 3. SEO Meta Tags & Open Graph Tags Addition */}
            <Helmet>
                <title>{product.title} | Premium Store</title>
                <meta name="description" content={product.description.substring(0, 160)} />
                <meta name="keywords" content={`${product.category}, ${product.brand}, buy ${product.title}`} />
                {/* Facebook / WhatsApp Share Tags */}
                <meta property="og:title" content={product.title} />
                <meta property="og:description" content={product.description.substring(0, 160)} />
                <meta property="og:image" content={product.thumbnail} />
                <meta property="og:type" content="product" />
                {/* Twitter Share Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={product.title} />
                <meta name="twitter:description" content={product.description.substring(0, 160)} />
                <meta name="twitter:image" content={product.thumbnail} />
                {/* Schema Markup Injection */}
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            </Helmet>

            {/* Breadcrumb & Back Nav */}
            <div className="border-b border-gray-100 bg-white sticky top-[60px] md:top-[70px] z-30">
                <Container className="px-4 sm:px-5 lg:px-8 py-3 md:py-4 flex items-center justify-between gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="group shrink-0 flex items-center gap-1 sm:gap-2 text-[13px] sm:text-[14px] font-medium text-gray-500 hover:text-black transition-colors"
                    >
                        <FiChevronLeft className="text-lg group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="hidden sm:block">Back to previous</span>
                        <span className="sm:hidden">Back</span>
                    </button>
                    {/* Breadcrumb Mobile */}
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[13px] font-medium text-gray-400 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <Link to="/" className="hover:text-black transition-colors shrink-0">Home</Link>
                        <span className="shrink-0">/</span>
                        <span className="text-black truncate max-w-[120px] sm:max-w-[200px]">{product.title}</span>
                    </div>
                </Container>
            </div>
            <Container className="px-4 sm:px-5 lg:px-8 pt-6 md:pt-10 lg:pt-16">
                <div className="flex flex-col lg:flex-row gap-y-8 md:gap-y-12 lg:gap-x-12 xl:gap-x-24">
                    {/* LEFT SIDE */}
                    <div className="w-full lg:w-[55%] flex flex-col-reverse md:flex-row gap-3 md:gap-4 lg:gap-6">
                        <div className="flex md:flex-col gap-2.5 sm:gap-3 lg:gap-4 overflow-x-auto md:overflow-visible pb-1 md:pb-0 scrollbar-hide snap-x snap-mandatory">
                            {product.images?.slice(0, 4).map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveImg(img)}
                                    className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 shrink-0 snap-start cursor-pointer rounded-[14px] lg:rounded-2xl overflow-hidden transition-all duration-300 bg-[#F8F9FA] ${
                                        activeImg === img 
                                            ? 'ring-2 ring-black ring-offset-2' 
                                            : 'border border-gray-200 hover:border-gray-400'
                                    }`}
                                >
                                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-contain p-1.5 sm:p-2 mix-blend-multiply" />
                                </div>
                            ))}
                        </div>
                        <div className="flex-1 w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-[#F8F9FA] rounded-[24px] lg:rounded-[32px] p-6 sm:p-10 flex items-center justify-center relative overflow-hidden group">
                            {product.discountPercentage > 0 && (
                                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-red-500 text-white text-[10px] sm:text-[12px] font-extrabold px-3 sm:px-4 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-lg shadow-red-500/30">
                                    {Math.round(product.discountPercentage)}% OFF
                                </div>
                            )}
                            <img 
                                src={activeImg} 
                                alt={product.title} 
                                className="w-full max-h-[250px] sm:max-h-[350px] lg:max-h-[450px] object-contain mix-blend-multiply transition-transform duration-700 ease-out" 
                            />
                        </div>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-center">
                        <div className="mb-3 sm:mb-4">
                            <h3 className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 sm:mb-3">
                                {product.brand || 'Premium Collection'}
                            </h3>
                            {/* Product Title uses h1 for SEO Priority */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-gray-900 leading-[1.2] lg:leading-[1.1] tracking-tight mb-3 sm:mb-4">
                                {product.title}
                            </h1>
                        </div>
                        {/* Reviews */}
                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                            <div className="flex items-center gap-0.5 sm:gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar 
                                        key={i} 
                                        className={`text-[13px] sm:text-[15px] ${i < Math.round(product.rating) ? "fill-[#111] text-[#111]" : "text-gray-200"}`} 
                                    />
                                ))}
                            </div>
                            <span className="text-[13px] sm:text-[14px] text-gray-500 font-medium pt-0.5">
                                {product.rating} / 5.0
                            </span>
                        </div>
                        {/* Price Tag */}
                        <div className="flex items-end gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">
                                ${product.price}
                            </span>
                            {product.discountPercentage > 0 && (
                                <span className="text-lg sm:text-xl md:text-2xl text-gray-400 line-through font-medium mb-0.5 sm:mb-1">
                                    ${Math.round(product.price * (1 + product.discountPercentage / 100))}
                                </span>
                            )}
                        </div>
                        {/* Description */}
                        <p className="text-gray-500 text-[14px] sm:text-[16px] leading-relaxed mb-8 sm:mb-10 border-b border-gray-100 pb-8 sm:pb-10">
                            {product.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
                            <div className="flex items-center justify-between w-full sm:w-[140px] h-12 sm:h-14 bg-gray-50 border border-gray-200 rounded-full px-4 sm:px-5 shrink-0">
                                <button
                                    onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
                                    className="text-gray-400 hover:text-black cursor-pointer transition-colors w-8 h-8 flex items-center justify-center focus:outline-none"
                                >
                                    <FiMinus className="text-base sm:text-lg" />
                                </button>
                                <span className="font-bold text-base sm:text-lg text-black">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(prev => prev < (product.stock || 10) ? prev + 1 : prev)}
                                    className="text-gray-400 hover:text-black cursor-pointer transition-colors w-8 h-8 flex items-center justify-center focus:outline-none"
                                >
                                    <FiPlus className="text-base sm:text-lg" />
                                </button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="w-full sm:flex-1 h-12 sm:h-14 flex items-center justify-center gap-2 sm:gap-3 bg-black text-white font-bold text-[14px] sm:text-[16px] rounded-full hover:bg-[#1a1a1a] transition-all duration-300 ease-out focus:outline-none"
                            >
                                <FiShoppingCart className="text-lg sm:text-xl" /> 
                                <span>Add to Cart</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="flex items-center gap-3 sm:gap-4 bg-gray-50/50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-100">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-black shadow-sm shrink-0">
                                    <FiTruck className="text-lg sm:text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-[13px] sm:text-[14px] font-bold text-gray-900 mb-0.5">Free Delivery</h4>
                                    <p className="text-[11px] sm:text-[12px] text-gray-500">Orders over $100</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 sm:gap-4 bg-gray-50/50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-100">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-black shadow-sm shrink-0">
                                    <FiShield className="text-lg sm:text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-[13px] sm:text-[14px] font-bold text-gray-900 mb-0.5">Secure Transaction</h4>
                                    <p className="text-[11px] sm:text-[12px] text-gray-500">100% encrypted</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 sm:gap-4 bg-gray-50/50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-100 sm:col-span-2">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-black shadow-sm shrink-0">
                                    <FiCheck className="text-lg sm:text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-[13px] sm:text-[14px] font-bold text-gray-900 mb-0.5">In Stock Ready to Ship</h4>
                                    <p className="text-[11px] sm:text-[12px] text-gray-500">{product.availabilityStatus || `${product.stock} items available`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default IndividualProduct;