import Flex from "../Flex"
import Container from "../Container"
import { FaArrowRight } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <Container className={'py-[125px] px-3 lg:px-0'}>
          <h3 className="text-[39px] text-[#262626] font-bold block pb-5">Contacts</h3>
          <Flex className={'text-[12px] text-[#767676] gap-x-2'}>
              <p>Home</p>
              <FaArrowRight />
              <p>Contacts</p>
          </Flex>
      </Container>
      <Container className={'pb-[140px] px-3 lg:px-0'}>
        <h4 className="text-[39px] text-[#262626] font-bold block pb-5">Fill up a Form</h4>
        <h4 className="text-base font-bold text-[#262626] pb-4">Name</h4>
        <input type="text" placeholder="Your Name Here" className="pb-4 outline-none w-full lg:w-[750px] border-b border-[#F0F0F0]"/>
        <h4 className="text-base font-bold text-[#262626] pt-4 pb-4">Email</h4>
        <input type="text" placeholder="Your email Here" className="pb-4 outline-none w-full lg:w-[750px] border-b border-[#F0F0F0]"/>
        <h4 className="text-base font-bold text-[#262626] pt-4 pb-4">Message</h4>
        <textarea name="" placeholder="Your message here" rows={'5'} cols={'5'} className="pb-4 outline-none w-full lg:w-[750px] border-b border-[#F0F0F0]" id=""></textarea>
      </Container>
    </>
  )
}

export default ContactUs