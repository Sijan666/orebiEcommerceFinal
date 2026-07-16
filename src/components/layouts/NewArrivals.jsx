import n1 from '../../assets/n1.jpg'
import n2 from '../../assets/n2.png'
import n3 from '../../assets/n3.png'
import n4 from '../../assets/n4.png'
import Container from '../Container'
import Product from '../Product'

// Swiper JS imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';

const NewArrivals = () => {
    return (
        <div className="lg:pt-8 lg:pb-20 py-10">
            <Container>
                <h3 className="text-[39px] text-[#262626] font-bold block pb-[30px]">New Arrivals</h3>
                <div className="relative lg:-mx-2"> 
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={15}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            480: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 30 },
                        }}
                        className="w-full pb-5"
                    >
                        <SwiperSlide>
                            <Product productImg={n1} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product productImg={n2} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product productImg={n3} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product productImg={n4} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product productImg={n1} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product productImg={n2} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                        </SwiperSlide>
                    </Swiper>
                    {/* --- Previous Arrow --- */}
                    <button className="custom-prev absolute top-[40%] left-0 lg:-left-5 z-10 w-8 h-8 bg-gray-100 hover:bg-black text-black hover:text-white flex items-center justify-center rounded-full -translate-y-1/2 transition-all duration-300 shadow-md">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    {/* --- Next Arrow --- */}
                    <button className="custom-next absolute top-[40%] right-0 lg:-right-5 z-10 w-8 h-8 bg-gray-100 hover:bg-black text-black hover:text-white flex items-center justify-center rounded-full -translate-y-1/2 transition-all duration-300 shadow-md">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default NewArrivals