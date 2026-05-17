import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaArrowRight } from 'react-icons/fa'

const Signup = () => {
    return (
        <>
        <Container className={'py-[100px]'}>
            <h3 className="text-[39px] text-[#262626] font-bold block pb-5">Sign up</h3>
            <Flex className={'text-[12px] text-[#767676] gap-x-2'}>
                <p>Home</p>
                <FaArrowRight />
                <p>Sign up</p>
            </Flex>
        </Container>
        <Container className={'pb-[11px]'}>
            <p className="text-base text-[#767676] border-b border-[#F0F0F0] pb-[60px] w-[620px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </Container>
        <Container className={'py-[60px]'}>
            <h4 className="text-[39px] text-[#262626] font-bold block pb-5">Your Personal Details</h4>
            <div className="pt-[50px]">
                <Flex className={'gap-x-5'}>
                    <div className="email w-[400px]">
                        <h4 className="pb-4 text-[#262626] font-bold text-base">First Name</h4>
                        <input type="text" placeholder="First Name" className="outline-none border-b border-[#F0F0F0] pb-4 w-[300px]"/>
                    </div>
                    <div className="pass w-[400px]">
                        <h4 className="pb-4 text-[#262626] font-bold text-base">Last Name</h4>
                        <input type="text" placeholder="Last Name" className="outline-none border-b border-[#F0F0F0] pb-4 w-[300px]"/>
                    </div>
                </Flex>
                <Flex className={'gap-x-5 pt-6'}>
                    <div className="email w-[400px]">
                        <h4 className="pb-4 text-[#262626] font-bold text-base">Email address</h4>
                        <input type="email" placeholder="company@domain.com" className="outline-none border-b border-[#F0F0F0] pb-4 w-[300px]"/>
                    </div>
                    <div className="pass w-[400px]">
                        <h4 className="pb-4 text-[#262626] font-bold text-base">Telephone</h4>
                        <input type="number" placeholder="Your phone number" className="outline-none border-b border-[#F0F0F0] pb-4 w-[300px]"/>
                    </div>
                </Flex>
            </div>
            <div className="py-15">
                <h4 className="text-[39px] text-[#262626] font-bold block pb-5">New Customer</h4>
                <div className="pt-[50px]">
                    <Flex className={'gap-x-5'}>
                        <div className="email w-[400px]">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Address 1</h4>
                            <input type="text" placeholder="4279 Zboncak Port Suite 6212" className="outline-none border-b border-[#F0F0F0] pb-4 w-[300px]"/>
                        </div>
                        <div className="pass w-[400px]">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Address 2</h4>
                            <input type="text" placeholder="" className="outline-none border-b border-[#F0F0F0] pb-4 w-[300px]"/>
                        </div>
                    </Flex>
                    <Flex className={'gap-x-5 pt-6'}>
                        <div className=" w-[400px]">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">City</h4>
                            <input type="text" placeholder="Your city" className="outline-none border-b border-[#F0F0F0] pb-4 w-[300px]"/>
                        </div>
                        <div className="pass w-[400px]">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Post Code</h4>
                            <input type="number" placeholder="05228" className="outline-none border-b border-[#F0F0F0] pb-4 w-[300px]"/>
                        </div>
                    </Flex>
                    <Flex className={'gap-x-5 pt-6'}>
                        <div className=" w-[400px]">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Country</h4>
                            <select className='outline-none border-b border-[#F0F0F0] pb-4 w-[300px]'>
                                <option value="">Your Country</option>
                                <option value="">A</option>
                                <option value="">B</option>
                                <option value="">C</option>
                                <option value="">D</option>
                            </select>
                        </div>
                        <div className=" w-[400px]">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Region/State</h4>
                            <select className='outline-none border-b border-[#F0F0F0] pb-4 w-[300px]'>
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
                    <Flex className={'gap-x-5'}>
                        <div className="email w-[400px]">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Password</h4>
                            <input type="password" placeholder="Password" className="outline-none border-b border-[#F0F0F0] pb-4 w-[300px]"/>
                        </div>
                        <div className="pass w-[400px]">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Repeat Password</h4>
                            <input type="password" placeholder="Repeat password" className="outline-none border-b border-[#F0F0F0] pb-4 w-[300px]"/>
                        </div>
                    </Flex>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Signup