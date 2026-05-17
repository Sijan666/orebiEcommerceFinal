import React, { useEffect, useRef, useState } from 'react';
import mixitup from 'mixitup';
import Container from '../Container'
import { FaArrowRight } from "react-icons/fa";
import Flex from '../Flex';
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import Product from '../Product';
import axios from 'axios';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from '../ui/pagination';

const Shop = () => {
    const containerRef = useRef(null);
    const [allData, setAllData] = useState([]);
    
    useEffect(()=>{
        async function fetchAllDatas() {
            try {
                const response = await axios.get("https://dummyjson.com/products")
                setAllData(response.data.products)
            } catch (error) {
                console.error("data not found", error.message)
            }
        }
        fetchAllDatas()
    },[]);

    useEffect(() => {
        if (containerRef.current && allData.length > 0) {
            mixitup(containerRef.current, {
                animation: {
                    duration: 400,
                }
            });
        }
    },);

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
                            <p >All Color</p>
                        </div>
                        <div data-filter=".catOne" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px]  cursor-pointer hover:font-bold hover:text-black duration-300 flex gap-x-2.5 items-center'>
                            <div className="rounded-[50%] h-4 w-4 bg-black"></div>
                            <p >Color 1</p>
                        </div>
                        <div data-filter=".catTwo" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px]  cursor-pointer hover:font-bold hover:text-black duration-300 flex gap-x-2.5 items-center'>
                            <div className="rounded-[50%] h-4 w-4 bg-[#FF8686]"></div>
                            <p >Color 2</p>
                        </div>
                        <div data-filter=".catThree" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px]  cursor-pointer hover:font-bold hover:text-black duration-300 flex gap-x-2.5 items-center'>
                            <div className="rounded-[50%] h-4 w-4 bg-[#7ED321]"></div>
                            <p >Color 3</p>
                        </div>
                        <div data-filter=".catFour" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px]  cursor-pointer hover:font-bold hover:text-black duration-300 flex gap-x-2.5 items-center'>
                            <div className="rounded-[50%] h-4 w-4 bg-[#B6B6B6]"></div>
                            <p >Color 4</p>
                        </div>
                        <div data-filter=".catFive" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px]  cursor-pointer hover:font-bold hover:text-black duration-300 flex gap-x-2.5 items-center'>
                            <div className="rounded-[50%] h-4 w-4 bg-[#15CBA5]"></div>
                            <p >Color 5</p>
                        </div>
                    </div>
                    <div className="brand py-6 lg:py-12">
                        <h4 className='text-[#262626] font-bold text-[18px] lg:text-[20px] pb-5 lg:pb-[30px]'>Shop by Brand</h4>
                        <p data-filter="all" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>All Brand</p>
                        <p data-filter=".catOne" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>Brand 1</p>
                        <p data-filter=".catTwo" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>Brand 2</p>
                        <p data-filter=".catThree" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>Brand 3</p>
                        <p data-filter=".catFour" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>Brand 4</p>
                        <p data-filter=".catFive" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>Brand 5</p>
                    </div>
                    <div className="price py-6 lg:py-12">
                        <h4 className='text-[#262626] font-bold text-[18px] lg:text-[20px] pb-5 lg:pb-[30px]'>Shop by Price</h4>
                        <p data-filter="all" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>All Price</p>
                        <p data-filter=".catOne" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>$0.00 - $9.99</p>
                        <p data-filter=".catTwo" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>$10.00 - $19.99</p>
                        <p data-filter=".catThree" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>$20.00 - $29.99</p>
                        <p data-filter=".catFour" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>$30.00 - $39.99</p>
                        <p data-filter=".catFive" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[15px] lg:my-[30px] cursor-pointer hover:font-bold hover:text-black duration-300'>$40.00 - $69.99</p>
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
                                    <option value="">Final Offer</option>
                                </select>
                            </div>
                            <div className="flex gap-x-3 items-center ">
                                <p className='text-[#767676] text-base'>Shows:</p>
                                <select className='px-4 py-1 text-[#767676] border border-[#F0F0F0] outline-none w-16 md:w-20 appearance-none'>
                                    <option value="">12</option>
                                    <option value="">24</option>
                                    <option value="">36</option>
                                    <option value="">48</option>
                                </select>
                            </div>
                        </div>
                    </div>
                        <div className="pt-4 lg:pt-8 pb-20 w-full" ref={containerRef}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10'>
                                {allData.map((item)=>(
                                <div key={item.id} className="mix all">
                                    <Product
                                    productImg={item.thumbnail}
                                    badgeText={item.stock}
                                    productTitle={item.title}
                                    productPrice={item.price}
                                    />
                                </div>
                                ))} 
                                {allData.slice(10,15).map((item)=>(
                                <div key={item.id} className="mix catOne">
                                    <Product
                                    productImg={item.thumbnail}
                                    badgeText={item.stock}
                                    productTitle={item.title}
                                    productPrice={item.price}
                                    />
                                </div>
                                ))}
                                {allData.slice(16,22).map((item)=>(
                                <div key={item.id} className="mix catTwo">
                                    <Product
                                    productImg={item.thumbnail}
                                    badgeText={item.stock}
                                    productTitle={item.title}
                                    productPrice={item.price}
                                    />
                                </div>
                                ))}
                            </div>
                            
                            <div className="flex justify-center mt-10 overflow-x-auto">
                                <Pagination>
                                    {" "}
                                    <PaginationContent className="flex-wrap justify-center gap-y-2">
                                    {" "}
                                    <PaginationItem className="font-sans font-normal text-sm text-[#767676] duration-100">
                                        {" "}
                                        <PaginationLink href="#">1</PaginationLink>{" "}
                                    </PaginationItem>{" "}
                                    <PaginationItem className="font-sans font-normal text-sm text-[#767676] duration-100">
                                        {" "}
                                        <PaginationLink href="#">2</PaginationLink>{" "}
                                    </PaginationItem>{" "}
                                    <PaginationItem className="font-sans font-normal text-sm text-[#767676] duration-100">
                                        {" "}
                                        <PaginationLink href="#">3</PaginationLink>{" "}
                                    </PaginationItem>{" "}
                                    <PaginationItem className="font-sans font-normal text-sm text-[#767676] duration-100">
                                        {" "}
                                        <PaginationLink href="#">4</PaginationLink>{" "}
                                    </PaginationItem>{" "}
                                    <PaginationItem className="font-sans font-normal text-sm text-[#767676] duration-100">
                                        {" "}
                                        <PaginationEllipsis />{" "}
                                    </PaginationItem>{" "}
                                    <PaginationItem className="font-sans font-normal text-sm text-[#767676] duration-100">
                                        {" "}
                                        <PaginationLink href="#">10</PaginationLink>{" "}
                                    </PaginationItem>{" "}
                                    </PaginationContent>{" "}
                                </Pagination>
                            </div>
                        </div>
                </div>
            </Flex>
        </Container>
        </>
    )
}

export default Shop