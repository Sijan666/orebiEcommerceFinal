import { Link } from "react-router-dom";
import Images from "../Images";

// Image imports
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
                    <Link to={'/productinside'} className="block w-full">
                        <Images imgSrc={intro} className="w-full h-auto object-cover mx-auto" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/shop'} className="block w-full">
                        <Images imgSrc={bg2} className="w-full h-auto object-cover mx-auto" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/shop'} className="block w-full">
                        <Images imgSrc={bg3} className="w-full h-auto object-cover mx-auto" />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;