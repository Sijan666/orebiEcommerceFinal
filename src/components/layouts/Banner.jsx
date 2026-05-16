import { Link, Links } from "react-router-dom"
import Container from "../Container"
import Images from "../Images"

import intro from '../../assets/Intro.png'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/bg3.png'


// slick slider start
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// slick slider end






const Banner = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        arrows: false,
        autoplay : true,
        autoSpeed : 1500,
    };
    return (
        <div className="py-2">
            <Slider {...settings}>
                <div className="">
                    <Link to={'/productinside'}>
                        <Images imgSrc={intro} className={"w-full mx-auto"}/>
                    </Link>
                </div>
                <div className="">
                    <Link to={'/shop'}>
                        <Images imgSrc={bg2} className={"w-full mx-auto"}/>
                    </Link>
                </div>
                <div className="">
                    <Link to={'/shop'}>
                        <Images imgSrc={bg3} className={"w-full mx-auto"}/>
                    </Link>
                </div>
            </Slider>
        </div>
    )
}

export default Banner
