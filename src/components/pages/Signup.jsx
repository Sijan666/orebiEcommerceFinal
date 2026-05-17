import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaArrowRight } from 'react-icons/fa'

const Signup = () => {
    return (
        <>
        <Container className={'py-[100px] px-3 lg:px-0'}>
            <h3 className="text-[39px] text-[#262626] font-bold block pb-5">Sign up</h3>
            <Flex className={'text-[12px] text-[#767676] gap-x-2'}>
                <p>Home</p>
                <FaArrowRight />
                <p>Sign up</p>
            </Flex>
        </Container>
        <Container className={'pb-[11px] px-3 lg:px-0'}>
            <p className="text-base text-[#767676] border-b border-[#F0F0F0] pb-[60px] lg:w-[620px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </Container>
        <Container className={'py-[60px] px-3 lg:px-0'}>
            <h4 className="text-[39px] text-[#262626] font-bold block pb-5">Your Personal Details</h4>
            <div className="pt-[50px]">
                <Flex className={'flex-col lg:flex-row gap-5'}>
                    <div className="email lg:w-[400px] w-full">
                        <h4 className="pb-4 text-[#262626] font-bold text-base">First Name</h4>
                        <input type="text" placeholder="First Name" className="outline-none border-b border-[#F0F0F0] pb-4 lg:w-[300px] w-full"/>
                    </div>
                    <div className="pass lg:w-[400px] w-full">
                        <h4 className="pb-4 text-[#262626] font-bold text-base">Last Name</h4>
                        <input type="text" placeholder="Last Name" className="outline-none border-b border-[#F0F0F0] pb-4 lg:w-[300px] w-full"/>
                    </div>
                </Flex>
                <Flex className={'flex-col lg:flex-row gap-5 pt-5'}>
                    <div className="email lg:w-[400px] w-full">
                        <h4 className="pb-4 text-[#262626] font-bold text-base">Email address</h4>
                        <input type="email" placeholder="company@domain.com" className="outline-none border-b border-[#F0F0F0] pb-4 lg:w-[300px] w-full"/>
                    </div>
                    <div className="pass lg:w-[400px] w-full">
                        <h4 className="pb-4 text-[#262626] font-bold text-base">Telephone</h4>
                        <input type="number" placeholder="Your phone number" className="outline-none border-b border-[#F0F0F0] pb-4 lg:w-[300px] w-full"/>
                    </div>
                </Flex>
            </div>
            <div className="py-15">
                <h4 className="text-[39px] text-[#262626] font-bold block pb-5">New Customer</h4>
                <div className="pt-[50px]">
                    <Flex className={'flex-col lg:flex-row gap-5'}>
                        <div className="email lg:w-[400px] w-full">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Address 1</h4>
                            <input type="text" placeholder="4279 Zboncak Port Suite 6212" className="outline-none border-b border-[#F0F0F0] pb-4 lg:w-[300px] w-full"/>
                        </div>
                        <div className="pass lg:w-[400px] w-full">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Address 2</h4>
                            <input type="text" placeholder="" className="outline-none border-b border-[#F0F0F0] pb-4 lg:w-[300px] w-full"/>
                        </div>
                    </Flex>
                    <Flex className={'flex-col lg:flex-row gap-5 pt-6'}>
                        <div className=" lg:w-[400px] w-full">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">City</h4>
                            <input type="text" placeholder="Your city" className="outline-none border-b border-[#F0F0F0] pb-4 lg:w-[300px] w-full"/>
                        </div>
                        <div className="pass lg:w-[400px] w-full">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Post Code</h4>
                            <input type="number" placeholder="05228" className="outline-none border-b border-[#F0F0F0] pb-4 lg:w-[300px] w-full"/>
                        </div>
                    </Flex>
                    <Flex className={'flex-col lg:flex-row gap-5 pt-6'}>
                        <div className=" lg:w-[400px] w-full">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Country</h4>
                            <select className='outline-none border-b border-[#F0F0F0] pb-4 lg:w-[300px] w-full'>
                                <option value="">Your Country</option>
                                <option value="">A</option>
                                <option value="">B</option>
                                <option value="">C</option>
                                <option value="">D</option>
                            </select>
                        </div>
                        <div className=" lg:w-[400px] w-full">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Region/State</h4>
                            <select className='outline-none border-b border-[#F0F0F0] pb-4 lg:w-[300px] w-full'>
                                <option value="">Please Select</option>
                                <option value="">A</option>
                                <option value="">B</option>
                                <option value="">C</option>
                                <option value="">D</option>
                            </select>
                        </div>
                    </Flex>
                </div>
            </div>
            <div className="py-15">
                <h4 className="text-[39px] text-[#262626] font-bold block pb-5">Your Password</h4>
                <div className="pt-[50px]">
                    <Flex className={'flex-col lg:flex-row gap-5'}>
                        <div className="email lg:w-[400px] w-full">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Password</h4>
                            <input type="password" placeholder="Password" className="outline-none border-b border-[#F0F0F0] pb-4 lg:w-[300px] w-full"/>
                        </div>
                        <div className="pass lg:w-[400px] w-full">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Repeat Password</h4>
                            <input type="password" placeholder="Repeat password" className="outline-none border-b border-[#F0F0F0] pb-4 lg:w-[300px] w-full"/>
                        </div>
                    </Flex>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Signup