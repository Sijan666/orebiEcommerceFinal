import Button from "../Button"
import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import shopBannerWatch from '../../assets/shopBannerWatch.png'

const ShopBanner = () => {
    return (
        <div className="pt-8 pb-10 md:pb-16 lg:pb-20">
            <Container className={'bg-[#F3F3F3]'}>
                <Flex className="flex-col lg:flex-row items-center py-8 px-4 lg:py-0 lg:px-0">
                    {/* Image */}
                    <div className="watch w-full lg:w-[40%] flex justify-center mb-6 lg:mb-0">
                        <Images imgSrc={shopBannerWatch}/>
                    </div>
                    {/* Text */}
                    <div className="textPart w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-10">
                        <h3 className="font-bold text-[28px] md:text-[34px] lg:text-[39px] text-[#262626]">
                            Phone of the year
                        </h3>
                        <p className="py-5 lg:py-10 text-[14px] md:text-base text-[#262626] w-full lg:w-[511px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..
                        </p>
                        <Button btnText={'Shop Now'} className={'py-3 px-10 md:py-4 md:px-14 text-sm md:text-base font-bold'}/>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default ShopBanner