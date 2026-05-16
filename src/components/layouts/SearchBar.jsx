
import Container from '../Container'
import Flex from '../Flex'
import { HugeiconsIcon } from '@hugeicons/react'
import { MenuTwoLineIcon } from '@hugeicons/core-free-icons'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {

    const [ show , setShow] = useState(false)
    const [ logshow , logsetShow] = useState(false)


    return (
        <>
        <div className="bg-[#F5F5F3] border border-[#979797] border-r-0 border-l-0">
            <Container className={'lg:py-6 py-2'}>
                <div className='flex flex-col lg:flex-row lg:justify-between gap-y-5 items-start lg:items-center mx-4 lg:mx-0'>
                    <div className="iconText flex items-center relative cursor-pointer">
                        <div className='pr-3 text-[14px] text-[#262626] flex gap-x-2 items-center' onClick={()=>setShow(!show)}>
                            <HugeiconsIcon icon={MenuTwoLineIcon} color='text-[#262626]' strokeWidth={3}/>
                            Shop by Category
                        </div>
                        {show && (
                            <div className="w-[265px] bg-black absolute top-8 left-0 z-2">
                                <ul>
                                    <li className='group py-4 px-5 text-[#FFFFFF]/70 hover:text-white hover:font-bold text-[14px] border-b border-[#2D2D2D] cursor-pointer'>
                                        <span className='inline-block duration-300 group-hover:translate-x-2'>
                                            Accesories
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
                    <div className="searchBar">
                        <div className="flex justify-between items-center bg-white border-gray-300 px-5 py-5 lg:w-[600px] w-[300px]">
                            <input type="text" placeholder="Search Products" className="outline-none placeholder:text-gray-400 text-[#C4C4C4] w-[80%]"/>
                            <button className="cursor-pointer"><FaSearch /></button>
                        </div>
                    </div>
                    <div className="icons justify-end">
                        <ul className='flex gap-x-2 '>
                            <li>
                                <Link to={'/login'}>
                                    <FaUser />
                                </Link>
                            </li>
                            <li className='relative cursor-pointer'>
                                <div className="" onClick={()=>logsetShow(!logshow)}>
                                    <GoTriangleDown/>
                                </div>
                                {logshow && (
                                <div className="w-[120px] bg-black absolute top-8 left-1/2 -translate-x-1/2 z-1">
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