import React, { useEffect, useRef, useState } from 'react';
import mixitup from 'mixitup'; 
import Container from '../Container';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Flex from '../Flex';
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import Product from '../Product';
import axios from 'axios';

const Shop = () => {
    const containerRef = useRef(null);
    const [allData, setAllData] = useState([]);
    
    // Pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    
    useEffect(() => {
        async function fetchAllDatas() {
            try {
                const response = await axios.get("https://dummyjson.com/products?limit=100");
                setAllData(response.data.products);
            } catch (error) {
                console.error("data not found", error.message);
            }
        }
        fetchAllDatas();
    }, []);

    // Pagination 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(allData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Pagination 
    const getPaginationNumbers = () => {
        const pages = [];
        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    useEffect(() => {
        let mixer;
        if (containerRef.current && currentItems.length > 0) {
            mixer = mixitup(containerRef.current, {
                animation: {
                    duration: 400,
                }
            });
        }
        return () => {
            if (mixer) {
                mixer.destroy();
            }
        };
    }, [currentItems]);

    const dummyCategories = ['catOne', 'catTwo', 'catThree', 'catFour', 'catFive'];

    return (
        <>
        <Container className={'py-[60px] lg:py-[125px] px-3 lg:px-0'}>
            <h3 className="text-[30px] lg:text-[39px] text-[#262626] font-bold block pb-5">Shop</h3>
            <Flex className={'text-[12px] text-[#767676] gap-x-2 items-center'}>
                <p>Home</p>
                <FaArrowRight />
                <p>Shop</p>
            </Flex>
        </Container>
        <Container className={'px-3 lg:px-0'}>
            <Flex className={'flex-col lg:flex-row justify-between items-start gap-x-4 gap-y-8'}>
                {/* Sidebar */}
                <div className="sideBar w-full lg:w-[30%] pb-[30px]">
                    <div className="category">
                        <h4 className='text-[#262626] font-bold text-[18px] lg:text-[20px] pb-5 lg:pb-[30px]'>Shop By Category</h4>
                        <p data-filter="all" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>All Products</p>
                        <p data-filter=".catOne" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>Category 1</p>
                        <p data-filter=".catTwo" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>Category 2</p>
                        <p data-filter=".catThree" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>Category 3</p>
                        <p data-filter=".catFour" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>Category 4</p>
                        <p data-filter=".catFive" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>Category 5</p>
                    </div>
                    <div className="color py-6 lg:py-12">
                        <h4 className='text-[#262626] font-bold text-[18px] lg:text-[20px] pb-5 lg:pb-[30px]'>Shop by Color</h4>
                        <div data-filter="all" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px]  cursor-pointer hover:font-bold hover:text-black duration-300 flex gap-x-2.5 items-center'>
                            <p>All Color</p>
                        </div>
                        <div data-filter=".catOne" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px]  cursor-pointer hover:font-bold hover:text-black duration-300 flex gap-x-2.5 items-center'>
                            <div className="rounded-[50%] h-4 w-4 bg-black"></div>
                            <p>Color 1</p>
                        </div>
                        <div data-filter=".catTwo" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px]  cursor-pointer hover:font-bold hover:text-black duration-300 flex gap-x-2.5 items-center'>
                            <div className="rounded-[50%] h-4 w-4 bg-[#FF8686]"></div>
                            <p>Color 2</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[70%]">
                    <div className="firstLine flex flex-col md:flex-row justify-between items-center pb-[30px] lg:pb-[50px] gap-y-4">
                        <div className='flex gap-x-3'>
                            <IoGrid className='text-[20px]'/>
                            <CiGrid2H className='text-[20px]'/>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-between gap-x-5 gap-y-3">
                            <div className="flex gap-x-3 items-center ">
                                <p className='text-[#767676] text-base'>Sort by:</p>
                                <select className='px-4 py-1 text-[#767676] border border-[#F0F0F0] outline-none w-32 md:w-40 appearance-none'>
                                    <option value="">Featured</option>
                                    <option value="">Best Sellers</option>
                                    <option value="">New Arrivals</option>
                                </select>
                            </div>
                            <div className="flex gap-x-3 items-center ">
                                <p className='text-[#767676] text-base'>Shows:</p>
                                <select 
                                    value={itemsPerPage}
                                    onChange={(e) => {
                                        setItemsPerPage(Number(e.target.value));
                                        setCurrentPage(1);
                                    }}
                                    className='px-4 py-1 text-[#767676] border border-[#F0F0F0] outline-none w-16 md:w-20 appearance-none cursor-pointer'
                                >
                                    <option value="12">12</option>
                                    <option value="24">24</option>
                                    <option value="36">36</option>
                                    <option value="48">48</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 lg:pt-8 pb-20 w-full" ref={containerRef}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10'>
                            {currentItems.map((item, index) => {
                                const filterClass = dummyCategories[index % dummyCategories.length];
                                return (
                                    <div key={item.id} className={`mix ${filterClass}`}>
                                        <Product
                                            productImg={item.thumbnail}
                                            badgeText={item.stock}
                                            productTitle={item.title}
                                            productPrice={item.price}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-[60px] lg:mt-[100px] w-full">
                                <div className="flex items-center gap-x-1 sm:gap-x-2 bg-[#121212]/80 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                                    {/* Prev Button */}
                                    <button
                                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`group flex items-center gap-x-2 px-4 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                                            currentPage === 1 
                                                ? 'text-[#444] cursor-not-allowed' 
                                                : 'text-gray-400 hover:text-white hover:bg-white/5 active:scale-95'
                                        }`}
                                    >
                                        <FaArrowLeft className={`text-xs transition-transform duration-300 ${currentPage !== 1 && 'group-hover:-translate-x-1'}`} /> 
                                        <span className="hidden sm:block">Prev</span>
                                    </button>
                                    {/* Page Numbers */}
                                    <div className="flex items-center gap-x-1 px-2 sm:px-4 border-x border-white/10">
                                        {getPaginationNumbers().map((page, index) => (
                                            page === '...' ? (
                                                <span key={`ellipsis-${index}`} className="px-2 text-gray-500 font-bold tracking-widest select-none">
                                                    ...
                                                </span>
                                            ) : (
                                                <button
                                                    key={page}
                                                    onClick={() => handlePageChange(page)}
                                                    className={`relative flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-500 overflow-hidden ${
                                                        currentPage === page 
                                                            ? 'bg-linear-to-br from-gray-100 to-gray-400 text-black scale-110 shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                                                            : 'text-gray-400 bg-transparent hover:text-white hover:bg-white/10 active:scale-95'
                                                    }`}
                                                >
                                                    {page}
                                                </button>
                                            )
                                        ))}
                                    </div>
                                    {/* Next Button */}
                                    <button
                                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className={`group flex items-center gap-x-2 px-4 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                                            currentPage === totalPages 
                                                ? 'text-[#444] cursor-not-allowed' 
                                                : 'text-gray-400 hover:text-white hover:bg-white/5 active:scale-95'
                                        }`}
                                    >
                                        <span className="hidden sm:block">Next</span> 
                                        <FaArrowRight className={`text-xs transition-transform duration-300 ${currentPage !== totalPages && 'group-hover:translate-x-1'}`} />
                                    </button>
                                    
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Flex>
        </Container>
        </>
    )
}

export default Shop;