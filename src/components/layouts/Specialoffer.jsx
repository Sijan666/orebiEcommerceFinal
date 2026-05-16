import so1 from '../../assets/so1.png'
import so2 from '../../assets/so2.png'
import so3 from '../../assets/so3.png'
import so4 from '../../assets/so4.png'
import Container from "../Container"
import Flex from "../Flex"
import Product from '../Product'


const Specialoffer = () => {
    return (
        <div className="pt-8 pb-20">
            <Container className={'px-3 lg:px-0'}>
                <h3 className="text-[39px] text-[#262626] font-bold block pb-[30px]">Special Offers</h3>
                <div className='grid lg:grid-cols-4 grid-cols-1'>
                    <div className="" id='productOne'>
                        <Product productImg={so1} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                    <div className="" id='productOne'>
                        <Product productImg={so2} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                    <div className="" id='productOne'>
                        <Product productImg={so3} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                    <div className="" id='productOne'>
                        <Product productImg={so4} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Specialoffer