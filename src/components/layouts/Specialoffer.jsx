import so1 from '../../assets/so1.png'
import so2 from '../../assets/so2.png'
import so3 from '../../assets/so3.png'
import so4 from '../../assets/so4.png'
import Container from "../Container"
import Flex from "../Flex"
import Product from '../Product'

const Specialoffer = () => {
    return (
        <div className="pt-8 pb-10 md:pb-16 lg:pb-20">
            <Container className={'px-3 lg:px-0'}>
                <h3 className="text-[26px] md:text-[32px] lg:text-[39px] text-[#262626] font-bold block pb-5 lg:pb-[30px]">
                    Special Offers
                </h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-8'>
                    <div className="productOne w-full">
                        <Product productImg={so1} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                    <div className="productOne w-full">
                        <Product productImg={so2} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                    <div className="productOne w-full">
                        <Product productImg={so3} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                    <div className="productOne w-full">
                        <Product productImg={so4} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Specialoffer