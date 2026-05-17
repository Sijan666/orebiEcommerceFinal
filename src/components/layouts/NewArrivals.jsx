import n1 from '../../assets/n1.jpg'
import n2 from '../../assets/n2.png'
import n3 from '../../assets/n3.png'
import n4 from '../../assets/n4.png'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'

// slick slider start
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../NextArrow'
import PrevArrow from '../PrevArrow'
// slick slider end



const NewArrivals = () => {
    // var settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     nextArrow: <NextArrow />,
    //     prevArrow: <PrevArrow />
    // };
    return (
        <>
            <div className="lg:pt-8 lg:pb-20">
                <Container>
                    <h3 className="text-[39px] text-[#262626] font-bold block pb-[30px]">New Arrivals</h3>
                    <div className="lg:-mx-2 "> 
                        {/* <Slider {...settings}> */}
                        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2">
                            <div className="">
                                <Product productImg={n1} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                            </div>
                            <div className="">
                                <Product productImg={n2} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                            </div>
                            <div className="">
                                <Product productImg={n3} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                            </div>
                            <div className="">
                                <Product productImg={n4} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                            </div>
                            {/* <div className="">
                                <Product productImg={n1} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                            </div>
                            <div className="">
                                <Product productImg={n2} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                            </div> */}
                        </div>
                        {/* </Slider> */}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default NewArrivals