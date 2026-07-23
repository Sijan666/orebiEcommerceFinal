import { Link } from "react-router-dom";
import Images from "../Images";
import intro from '../../assets/Intro.png';
import bg2 from '../../assets/bg2.png';
import bg3 from '../../assets/bg3.png';

// Swiper JS imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/autoplay';

const Banner = () => {
    return (
        <div className="py-2 w-full overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1500}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <Link to={'/productinside'} className="block w-full" aria-label="View introductory offer">
                        <Images 
                            imgSrc={intro} 
                            alt="Amazon Prime Home Services Offer" 
                            className="w-full h-auto object-cover mx-auto" 
                            fetchPriority="high" 
                            loading="eager"
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/shop'} className="block w-full" aria-label="Shop new arrivals">
                        <Images 
                            imgSrc={bg2} 
                            alt="Shop Collection Banner 2" 
                            className="w-full h-auto object-cover mx-auto" 
                            loading="lazy"
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/shop'} className="block w-full" aria-label="Explore more products">
                        <Images 
                            imgSrc={bg3} 
                            alt="Shop Collection Banner 3" 
                            className="w-full h-auto object-cover mx-auto" 
                            loading="lazy"
                        />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;