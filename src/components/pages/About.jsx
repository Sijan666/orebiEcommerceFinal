import Container from "../Container"
import Flex from "../Flex"
import { FaArrowRight } from "react-icons/fa";
import Images from "../Images";
import about1 from '../../assets/about1.png'
import about2 from '../../assets/about2.png'
import Button from "../Button";

const About = () => {
  return (
    <>
    <section className="py-2" id="about">
      <Container className={'py-[125px] px-3 lg:px-0'}>
          <h3 className="text-[39px] text-[#262626] font-bold block pb-5">About</h3>
          <Flex className={'text-[12px] text-[#767676] gap-x-2'}>
              <p>Home</p>
              <FaArrowRight />
              <p>About</p>
          </Flex>
      </Container>
      <Container className={'pt-[60px] pb-[100px] px-3 lg:px-0'}>
        <Flex className={'justify-between gap-x-10'}>
          <div className="leftSide relative">
            <Images imgSrc={about1}/>
            <Button btnText={'Our Brands'} className={'py-4 px-14 absolute bottom-[50px] left-[50%] -translate-x-[50%] text-base'}/>
          </div>
          <div className="leftSide relative">
            <Images imgSrc={about2}/>
            <Button btnText={'Our Stores'} className={'py-4 px-14 absolute bottom-[50px] left-[50%] -translate-x-[50%] text-base'}/>
          </div>
        </Flex>
      </Container>
      <Container className={'px-3 lg:px-0'}>
        <h4 className="text-[39px]">Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h4>
      </Container>
      <Container className={'py-[120px] px-3 lg:px-0'}>
        <Flex className={'justify-between gap-x-5'}>
          <div className="">
            <h4 className="pb-[25px] text-[25px] text-[#262626] font-bold">Our Vision</h4>
            <p className="text-[#767676] leading-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="">
            <h4 className="pb-[25px] text-[25px] text-[#262626] font-bold">Our Story</h4>
            <p className="text-[#767676] leading-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
          </div>
          <div className="">
            <h4 className="pb-[25px] text-[25px] text-[#262626] font-bold">Our Brands</h4>
            <p className="text-[#767676] leading-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          </div>
        </Flex>
      </Container>
    </section>
    </>
  )
}

export default About