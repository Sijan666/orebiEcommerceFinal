import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import Logo from '../../assets/Logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F3] py-10 lg:py-[50px]">
        <Container className={'px-4 lg:px-0'}>
          <div className='flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between items-start pb-10 lg:pb-[60px] gap-y-8 lg:gap-y-0'>
            <div className="menu w-1/2 sm:w-[30%] lg:w-auto">
              <p className="text-[#262626] text-base font-bold pb-4 lg:pb-[25px] uppercase">Menu</p>
              <ul className="leading-[23px]">
                <li className="text-[14px] text-[#6D6D6D] mb-2 lg:mb-0">
                  <Link to={'/'}>
                  Home
                  </Link>
                </li>
                <li className="text-[14px] text-[#6D6D6D] mb-2 lg:mb-0">
                  <Link to={'/shop'}>
                  Shop
                  </Link>
                </li>
                <li className="text-[14px] text-[#6D6D6D] mb-2 lg:mb-0">
                  <Link to={'/about'}>
                  About
                  </Link>
                </li>
                <li className="text-[14px] text-[#6D6D6D] mb-2 lg:mb-0">
                  <Link to={'/contact'}>
                  Contact
                  </Link>
                </li>
                <li className="text-[14px] text-[#6D6D6D]">
                  <Link to={'/journal'}>
                  Journal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="shop w-1/2 sm:w-[30%] lg:w-auto">
              <p className="text-[#262626] text-base font-bold pb-4 lg:pb-[25px] uppercase">Shop</p>
              <ul className="leading-[23px]">
                <li className="text-[14px] text-[#6D6D6D] mb-2 lg:mb-0">Category 1</li>
                <li className="text-[14px] text-[#6D6D6D] mb-2 lg:mb-0">Category 2</li>
                <li className="text-[14px] text-[#6D6D6D] mb-2 lg:mb-0">Category 3</li>
                <li className="text-[14px] text-[#6D6D6D] mb-2 lg:mb-0">Category 4</li>
                <li className="text-[14px] text-[#6D6D6D]">Category 5</li>
              </ul>
            </div>
            <div className="help w-1/2 sm:w-[30%] lg:w-auto">
              <p className="text-[#262626] text-base font-bold pb-4 lg:pb-[25px] uppercase">Help</p>
              <ul className="leading-[23px]">
                <li className="text-[14px] text-[#6D6D6D] mb-2 lg:mb-0">Privacy Policy</li>
                <li className="text-[14px] text-[#6D6D6D] mb-2 lg:mb-0">Terms & Conditions</li>
                <li className="text-[14px] text-[#6D6D6D] mb-2 lg:mb-0">Special E-shop</li>
                <li className="text-[14px] text-[#6D6D6D] mb-2 lg:mb-0">Shipping</li>
                <li className="text-[14px] text-[#6D6D6D]">Secure Payments</li>
              </ul>
            </div>
            <div className="contact w-full sm:w-[50%] lg:w-auto mt-4 sm:mt-6 lg:mt-0">
              <p className="text-[#262626] text-base font-bold pb-4 lg:pb-[25px] uppercase w-full max-w-[190px] leading-[27px]">(052) 611-5711 company@domain.com</p>
              <p className="text-[14px] text-[#6D6D6D]">575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className="footerLogo w-full sm:w-[40%] lg:w-auto mt-6 lg:mt-0 flex sm:justify-end lg:justify-start items-start">
              <Link to={'/'}>
              <Images imgSrc={Logo}/>
              </Link>
            </div>
          </div>
          {/* Bottom part of footer */}
          <Flex className={'lg:justify-between lg:flex-row flex-col gap-5 items-center justify-center'}>
            <div className="footerIcons">
              <ul className="flex justify-between gap-x-6 items-center">
                <li>
                <Link to={'/'} className="text-[#262626] hover:text-black duration-300">
                  <FaFacebookF/>
                </Link>
                </li>
                <li>
                <Link to={'/'} className="text-[#262626] hover:text-black duration-300">
                  <FaLinkedinIn/>
                </Link>
                </li>
                <li>
                <Link to={'/'} className="text-[#262626] hover:text-black duration-300">
                  <FaInstagram/>
                </Link>
                </li>
              </ul>
            </div>
            <p className="text-[14px] text-[#6D6D6D] text-center lg:text-left">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Footer