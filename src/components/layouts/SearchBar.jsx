import Container from '../Container'
import Flex from '../Flex'
import { HugeiconsIcon } from '@hugeicons/react'
import { MenuTwoLineIcon } from '@hugeicons/core-free-icons'
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {

    const [show, setShow] = useState(false)
    const [logshow, logsetShow] = useState(false)

    return (
        <>
        <div className="bg-[#F5F5F3] border border-[#979797] border-r-0 border-l-0">
            <Container className={'py-4 lg:py-6'}>
                <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-y-5 items-center mx-4 lg:mx-0'>
                    
                    {/* Category Menu Part */}
                    <div className="iconText w-full md:w-auto flex justify-center md:justify-start items-center relative cursor-pointer">
                        <div className='pr-3 text-[14px] text-[#262626] flex gap-x-2 items-center' onClick={() => setShow(!show)}>
                            <HugeiconsIcon icon={MenuTwoLineIcon} color='text-[#262626]' strokeWidth={3}/>
                            Shop by Category
                        </div>
                        {show && (
                            <div className="w-[265px] bg-black absolute top-10 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 z-50">
                                <ul>
                                    <li className='group py-4 px-5 text-[#FFFFFF]/70 hover:text-white hover:font-bold text-[14px] border-b border-[#2D2D2D] cursor-pointer'>
                                        <span className='inline-block duration-300 group-hover:translate-x-2'>
                                            Accessories
                                        </span>
                                    </li>
                                    <li className='group py-4 px-5 text-[#FFFFFF]/70 hover:text-white hover:font-bold text-[14px] border-b border-[#2D2D2D] cursor-pointer'>
                                        <span className='inline-block duration-300 group-hover:translate-x-2'>
                                            Furniture
                                        </span>
                                    </li>
                                    <li className='group py-4 px-5 text-[#FFFFFF]/70 hover:text-white hover:font-bold text-[14px] border-b border-[#2D2D2D] cursor-pointer'>
                                        <span className='inline-block duration-300 group-hover:translate-x-2'>
                                            Electronics
                                        </span>
                                    </li>
                                    <li className='group py-4 px-5 text-[#FFFFFF]/70 hover:text-white hover:font-bold text-[14px] border-b border-[#2D2D2D] cursor-pointer'>
                                        <span className='inline-block duration-300 group-hover:translate-x-2'>
                                            Clothes
                                        </span>
                                    </li>
                                    <li className='group py-4 px-5 text-[#FFFFFF]/70 hover:text-white hover:font-bold text-[14px] border-b border-[#2D2D2D] cursor-pointer'>
                                        <span className='inline-block duration-300 group-hover:translate-x-2'>
                                            Bags
                                        </span>
                                    </li>
                                    <li className='group py-4 px-5 text-[#FFFFFF]/70 hover:text-white hover:font-bold text-[14px] border-b border-[#2D2D2D] cursor-pointer'>
                                        <span className='inline-block duration-300 group-hover:translate-x-2'>
                                            Home appliances
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    
                    {/* Search Bar Part */}
                    <div className="searchBar w-full md:w-auto flex-1 md:mx-4 lg:mx-0 flex justify-center">
                        <div className="flex justify-between items-center bg-white border-gray-300 px-4 py-3 lg:px-5 lg:py-5 w-full max-w-[600px]">
                            <input type="text" placeholder="Search Products" className="outline-none placeholder:text-gray-400 text-[#C4C4C4] w-[80%]"/>
                            <button className="cursor-pointer"><FaSearch /></button>
                        </div>
                    </div>
                    
                    {/* Icons Part */}
                    <div className="icons w-full md:w-auto flex justify-center md:justify-end">
                        <ul className='flex gap-x-4 items-center'>
                            <li>
                                <Link to={'/login'}>
                                    <FaUser />
                                </Link>
                            </li>
                            <li className='relative cursor-pointer flex items-center'>
                                <div className="" onClick={() => logsetShow(!logshow)}>
                                    <GoTriangleDown/>
                                </div>
                                {logshow && (
                                <div className="w-[120px] bg-black absolute top-8 left-1/2 -translate-x-1/2 z-50">
                                    <ul>
                                        <li className='group py-4 px-5 text-[#FFFFFF]/70 hover:text-white hover:font-bold text-[14px] border-b border-[#2D2D2D] cursor-pointer'>
                                            <span className='inline-block duration-300 group-hover:translate-x-2'>
                                                <Link to={'/login'}>
                                                    Log In
                                                </Link>
                                            </span>
                                        </li>
                                        <li className='group py-4 px-5 text-[#FFFFFF]/70 hover:text-white hover:font-bold text-[14px] border-b border-[#2D2D2D] cursor-pointer'>
                                            <span className='inline-block duration-300 group-hover:translate-x-2'>
                                                <Link to={'/signup'}>
                                                    Sign Up
                                                </Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                )}
                            </li>
                            <Link to={'/shop'} className='ml-3'>
                                <FaShoppingCart />
                            </Link>
                        </ul>
                    </div>
                    
                </div>
            </Container>
        </div>
        </>
    )
}

export default SearchBar