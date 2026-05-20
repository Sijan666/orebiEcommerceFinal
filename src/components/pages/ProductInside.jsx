import { FaArrowRight } from "react-icons/fa"
import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import Reviews from '../../assets/Reviews.png'
import Rating from '../../assets/Rating.png'

// counter
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '/src/features/counter/counterSlice'

const ProductInside = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
        <section id="productInside">
            <Container className={'py-[60px] md:py-[125px] px-4 lg:px-0'}>
                <h3 className="text-[28px] md:text-[39px] text-[#262626] font-bold block pb-3 md:pb-5">Products</h3>
                <Flex className={'text-[12px] text-[#767676] gap-x-2 items-center'}>
                    <p>Home</p>
                    <FaArrowRight />
                    <p>Products</p>
                </Flex>
            </Container>
            <div className="py-[30px] md:py-[60px]">
                <Container className={'px-4 lg:px-0'}>
                    <div className="pb-[30px] md:pb-[50px]">
                        <Flex className={'flex-col md:flex-row justify-between gap-y-4 md:gap-y-0 md:gap-x-5'}>
                            <div className="w-full md:w-1/2">
                                <Images imgSrc={p1} className={'w-full object-cover'}/>
                            </div>
                            <div className="w-full md:w-1/2">
                                <Images imgSrc={p2} className={'w-full object-cover'}/>
                            </div>
                        </Flex>
                        <Flex className={'flex-col md:flex-row justify-between gap-y-4 md:gap-y-0 md:gap-x-5 mt-4 md:mt-5'}>
                            <div className="w-full md:w-1/2">
                                <Images imgSrc={p3} className={'w-full object-cover'}/>
                            </div>
                            <div className="w-full md:w-1/2">
                                <Images imgSrc={p4} className={'w-full object-cover'}/>
                            </div>
                        </Flex>
                    </div>
                    <div className="w-full lg:w-[780px]">
                        <h4 className="text-[#262626] font-bold text-[28px] md:text-[40px] pb-2.5 md:pb-[15px]">Product</h4>
                        <Images imgSrc={Reviews} className={'pb-4 md:pb-5'}/>
                        <div className="flex gap-x-5 items-center pb-5 md:pb-[26px] border-b border-[#F0F0F0] mb-5 md:mb-[30px]">
                            <p className="line-through text-[#767676] text-sm md:text-base">$88.00</p>
                            <p className="font-bold text-[18px] md:text-[20px] text-[#262626]">$44.00</p>
                        </div>
                        <div className="pb-5 md:pb-[30px] border-b border-[#F0F0F0]">
                            <div className="flex gap-x-6 md:gap-x-10 items-center pb-4 md:pb-5">
                                <p className="text-[#262626] font-bold text-sm md:text-base">COLOR:</p>
                                <div className="flex gap-x-3 md:gap-x-4">
                                    <div className="rounded-[50%] h-4 w-4 bg-[#000000]/30 hover:bg-[#000000] hover:scale-125 duration-300 cursor-pointer"></div>
                                    <div className="rounded-[50%] h-4 w-4 bg-[#FF8686]/30 hover:bg-[#FF8686] hover:scale-125 duration-300 cursor-pointer"></div>
                                    <div className="rounded-[50%] h-4 w-4 bg-[#7ED321]/30 hover:bg-[#7ED321] hover:scale-125 duration-300 cursor-pointer"></div>
                                    <div className="rounded-[50%] h-4 w-4 bg-[#B6B6B6]/30 hover:bg-[#B6B6B6] hover:scale-125 duration-300 cursor-pointer"></div>
                                    <div className="rounded-[50%] h-4 w-4 bg-[#15CBA5]/30 hover:bg-[#15CBA5] hover:scale-125 duration-300 cursor-pointer"></div>
                                </div>
                            </div>
                            <div className="flex gap-x-8 md:gap-x-10 items-center pb-4 md:pb-5">
                                <p className="text-[#262626] font-bold text-sm md:text-base">SIZE:</p>
                                <div className="flex gap-x-4">
                                    <select className='px-3 md:px-4 py-1 text-[#767676] border border-[#F0F0F0] outline-none w-28 md:w-40 cursor-pointer text-sm md:text-base'>
                                        <option value="">S</option>
                                        <option value="">XL</option>
                                        <option value="">XXL</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-x-4 md:gap-x-10 items-center">
                                <p className="text-[#262626] font-bold text-sm md:text-base">QUANTITY:</p>
                                <div className="flex gap-x-4 py-1 px-4 md:px-5 border border-[#F0F0F0] items-center">
                                    <button aria-label="Decrement value" onClick={() => { if (count > 1) {dispatch(decrement())}}} className="text-[#767676] text-[20px] md:text-[25px] cursor-pointer">-</button>
                                    <span className="text-[#767676] text-[18px] md:text-[25px]">{count}</span>
                                    <button aria-label="Increment value" onClick={() => dispatch(increment())} className="text-[#767676] text-[20px] md:text-[25px] cursor-pointer">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="pb-4 md:pb-5 border-b border-[#F0F0F0]">
                            <div className="flex gap-x-10 items-center pt-4 md:pt-5">
                                <p className="text-[#262626] font-bold text-sm md:text-base">Status:</p>
                                <p className="text-[#767676] text-sm md:text-base">In stock</p>
                            </div>
                        </div>
                        <div className="pb-5 md:pb-[30px] border-b border-[#F0F0F0]">
                            <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-6 md:gap-x-10 items-start sm:items-center pt-5 md:pt-[30px]">
                                <button className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 border border-[#262626] hover:bg-[#262626] text-black hover:text-white duration-300 cursor-pointer font-bold text-sm md:text-base">Add to Wish list</button>
                                <button className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 border border-[#262626] hover:bg-[#262626] text-black hover:text-white duration-300 cursor-pointer font-bold text-sm md:text-base">Add to Cart</button>
                            </div>
                        </div>
                        <div className="pb-4 md:pb-6 border-b border-[#F0F0F0]">
                            <div className="pt-4 md:pt-6">
                                <p className="text-[#262626] text-sm md:text-base font-bold">FEATURES & DETAILS</p>
                            </div>
                        </div>
                        <div className="pb-4 md:pb-6 border-b border-[#F0F0F0]">
                            <div className="pt-4 md:pt-6">
                                <p className="text-[#262626] text-sm md:text-base font-bold">SHIPPING & RETURNS</p>
                            </div>
                        </div>
                        <div>
                            <div className="pt-4 md:pt-6">
                                <p className="text-[#767676] text-sm md:text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="py-12 md:py-20">
                    <Container className={'px-4 lg:px-0'}>
                        <Flex className={'gap-x-8 md:gap-x-15 pb-[30px] md:pb-[50px]'}>
                            <h4 className="text-[#767676] text-[18px] md:text-[20px] hover:font-bold hover:text-[#262626] duration-300 cursor-pointer">Description</h4>
                            <h4 className="text-[#767676] text-[18px] md:text-[20px] hover:font-bold hover:text-[#262626] duration-300 cursor-pointer">Reviews (1)</h4>
                        </Flex>
                        <div className="pb-4 border-b border-[#F0F0F0]">
                            <p className="text-[#767676] text-[13px] md:text-[14px]">1 review for Product</p>
                        </div>
                        <div className="pb-4 pt-5 md:pt-[30px] border-b border-[#F0F0F0]">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 md:pb-4 gap-y-2 sm:gap-y-0">
                                <div className="flex gap-x-5 md:gap-x-10 items-center">
                                    <p className="text-[#262626] text-sm md:text-base font-medium">John Ford</p>
                                    <Images imgSrc={Rating} className={'w-[60px] md:w-[70px]'}/>
                                </div>
                                <p className="text-[#767676] text-[12px] md:text-base">6 months ago</p>
                            </div>
                            <p className="text-sm md:text-base text-[#767676] leading-relaxed w-full lg:w-[780px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </Container>
                </div>
                <div className="py-8 md:py-12">
                    <Container className={'px-4 lg:px-0'}>
                        <h4 className="pb-6 md:pb-10 text-[#262626] font-bold text-[18px] md:text-[20px]">Add a Review</h4>
                        <h5 className="text-[#262626] font-bold text-sm md:text-base pb-2 md:pb-2.5">Name</h5>
                        <input type="text" placeholder="Your name here" className="border-b border-[#F0F0F0] mb-5 md:mb-6 outline-none w-full md:w-[600px] pb-3 md:pb-4 text-sm md:text-base"/>
                        <h5 className="text-[#262626] font-bold text-sm md:text-base pb-2 md:pb-2.5">Email</h5>
                        <input type="email" placeholder="Your email here" className="border-b border-[#F0F0F0] mb-5 md:mb-6 outline-none w-full md:w-[600px] pb-3 md:pb-4 text-sm md:text-base"/>
                        <h5 className="text-[#262626] font-bold text-sm md:text-base pb-2 md:pb-2.5">Review</h5>
                        <textarea name="" placeholder="Your review here" className="border-b border-[#F0F0F0] outline-none w-full md:w-[600px] pb-3 md:pb-4 block text-sm md:text-base resize-none" rows={'5'} cols={'5'}></textarea>
                        <button className="w-full sm:w-auto px-10 md:px-20 py-3 md:py-4 font-bold text-black hover:text-white text-sm md:text-base hover:bg-[#262626] duration-300 mt-5 md:mt-[30px] border border-[#262626] cursor-pointer">Post</button>
                    </Container>
                </div>
            </div>
        </section>
        </>
    )
}

export default ProductInside