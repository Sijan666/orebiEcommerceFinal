import Flex from "../Flex"
import Container from "../Container"
import { FaArrowRight } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <Container className={'py-10 md:py-16 lg:py-[125px] px-4 lg:px-0'}>
          <h3 className="text-[28px] md:text-[34px] lg:text-[39px] text-[#262626] font-bold block pb-3 md:pb-5">Contacts</h3>
          <Flex className={'text-[12px] text-[#767676] gap-x-2 items-center'}>
              <p>Home</p>
              <FaArrowRight />
              <p>Contacts</p>
          </Flex>
      </Container>
      <Container className={'pb-16 md:pb-[100px] lg:pb-[140px] px-4 lg:px-0'}>
        <h4 className="text-[28px] md:text-[34px] lg:text-[39px] text-[#262626] font-bold block pb-6 md:pb-10">Fill up a Form</h4>
        <h4 className="text-sm md:text-base font-bold text-[#262626] pb-2 md:pb-4">Name</h4>
        <input type="text" placeholder="Your Name Here" className="pb-3 md:pb-4 mb-4 md:mb-6 outline-none w-full lg:w-[750px] border-b border-[#F0F0F0] text-sm md:text-base"/>
        <h4 className="text-sm md:text-base font-bold text-[#262626] pb-2 md:pb-4">Email</h4>
        <input type="email" placeholder="Your email Here" className="pb-3 md:pb-4 mb-4 md:mb-6 outline-none w-full lg:w-[750px] border-b border-[#F0F0F0] text-sm md:text-base"/>
        <h4 className="text-sm md:text-base font-bold text-[#262626] pb-2 md:pb-4">Message</h4>
        <textarea name="" placeholder="Your message here" rows={'5'} cols={'5'} className="pb-3 md:pb-4 outline-none w-full lg:w-[750px] border-b border-[#F0F0F0] text-sm md:text-base resize-none" id=""></textarea>
      </Container>
    </>
  )
}

export default ContactUs