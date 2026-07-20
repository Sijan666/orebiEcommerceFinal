import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import Container from "../Container";
import Images from "../Images";
import Logo from '../../assets/Logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    
    const location = useLocation();
    const categoryRef = useRef();
    const userRef = useRef();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (categoryRef.current && !categoryRef.current.contains(event.target)) {
                setShowCategory(false);
            }
            if (userRef.current && !userRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "About", path: "/about" },
        { name: "Contacts", path: "/contact" },
    ];

    const categories = [
        "Accessories", "Furniture", "Electronics", "Clothes", "Bags", "Home Appliances"
    ];

    return (

        <header
            className={`sticky top-0 w-full z-100 transition-all duration-300 ease-in-out ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-gray-200/50"
                    : "bg-white border-b border-gray-100"
            }`}
        >
            <Container>
                {/* TOP ROW */}
                <div className="flex items-center justify-between py-4 lg:py-5 gap-x-4 lg:gap-x-8">
                    <div className="shrink-0 z-50">
                        <Link to="/" className="block transition-transform duration-300">
                            <Images imgSrc={Logo} className="h-7 lg:h-8 w-auto object-contain" />
                        </Link>
                    </div>
                    <div className="hidden md:flex flex-1 max-w-2xl justify-center">
                        <div className="relative w-full group">
                            <input 
                                type="text" 
                                placeholder="Search for products, brands and more..." 
                                className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-[14px] px-6 py-3 rounded-full outline-none transition-all duration-300 focus:bg-white focus:border-black focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300">
                                <FiSearch className="text-md" />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-x-2 lg:gap-x-4 z-50">
                        <div ref={userRef} className="relative hidden md:block">
                            <button 
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center gap-x-1 p-2.5 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 transition-colors duration-300"
                            >
                                <FiUser className="text-xl" />
                                <FiChevronDown className={`text-sm transition-transform duration-300 ${showUserMenu ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`absolute top-full mt-2 w-[150px] right-0 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 origin-top-right ${showUserMenu ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"}`}>
                                <ul className="py-2">
                                    <li><Link to={'/login'} className="block px-5 py-2.5 text-[14px] text-gray-600 hover:text-black hover:bg-gray-50" onClick={() => setShowUserMenu(false)}>Log In</Link></li>
                                    <li><Link to={'/signup'} className="block px-5 py-2.5 text-[14px] text-gray-600 hover:text-black hover:bg-gray-50" onClick={() => setShowUserMenu(false)}>Sign Up</Link></li>
                                </ul>
                            </div>
                        </div>
                        <Link to={'/cart'} className="relative p-2.5 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 transition-colors duration-300">
                            <FiShoppingCart className="text-xl" />
                            <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white">
                                2
                            </span>
                        </Link>
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-800 focus:outline-none ml-1"
                        >
                            {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                        </button>
                    </div>
                </div>
                {/* BOTTOM ROW */}
                <div className={`hidden md:flex items-center justify-between pb-4 transition-all duration-300 ${isScrolled ? "hidden" : "block"}`}>
                    <div ref={categoryRef} className="relative z-40">
                        <button 
                            onClick={() => setShowCategory(!showCategory)}
                            className="flex items-center gap-x-2 text-[14px] font-medium text-gray-700 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-full transition-all duration-300"
                        >
                            <BiCategory className="text-lg" />
                            <span>Shop by Category</span>
                            <FiChevronDown className={`transition-transform duration-300 ${showCategory ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`absolute top-full mt-2 w-60 left-0 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 origin-top ${showCategory ? "scale-y-100 opacity-100 visible" : "scale-y-95 opacity-0 invisible"}`}>
                            <ul className="py-2">
                                {categories.map((item, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={`/category/${item.toLowerCase().replace(' ', '-')}`}
                                            className="block px-5 py-2.5 text-[14px] text-gray-600 hover:text-black hover:bg-gray-50"
                                            onClick={() => setShowCategory(false)}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <nav className="flex items-center space-x-2">
                        {navLinks.map((link, index) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link key={index} to={link.path} className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-300 ${isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100 hover:text-black"}`}>
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </Container>
            {/* MOBILE MENU */}
            <div className={`md:hidden fixed inset-0 top-[70px] bg-white/95 backdrop-blur-3xl transition-transform duration-500 ease-[0.22,1,0.36,1] flex flex-col items-center ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
                <div className="w-full px-6 py-6 overflow-y-auto">
                    <div className="relative w-full mb-8">
                        <input type="text" placeholder="Search products..." className="w-full bg-gray-50 border border-gray-200 text-[14px] px-5 py-3 rounded-xl outline-none focus:border-black" />
                        <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    </div>
                    <nav className="flex flex-col space-y-5 mb-8 border-b border-gray-100 pb-8">
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`text-2xl font-bold ${location.pathname === link.path ? "text-black" : "text-gray-400 hover:text-black"}`}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Categories</h4>
                        <ul className="flex flex-col space-y-3">
                            {categories.map((item, index) => (
                                <li key={index}><Link to={`/category/${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 text-[16px] hover:text-black">{item}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;