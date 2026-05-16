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
      <div className="bg-[#F5F5F3] py-[50px]">
        <Container className={'px-3 lg:px-0'}>
          <div className='flex-col flex lg:flex-row justify-between items-start pb-[60px] gap-y-5'>
            <div className="menu">
              <p className="text-[#262626] text-base font-bold pb-[25px] uppercase">Menu</p>
              <ul className="leading-[23px]">
                <li className="text-[14px] text-[#6D6D6D]">
                  <Link to={'/'}>
                  Home
                  </Link>
                </li>
                <li className="text-[14px] text-[#6D6D6D]">
                  <Link to={'/shop'}>
                  Shop
                  </Link>
                </li>
                <li className="text-[14px] text-[#6D6D6D]">
                  <Link to={'/about'}>
                  About
                  </Link>
                </li>
                <li className="text-[14px] text-[#6D6D6D]">
                  <Link to={'/contact'}>
                  Conact
                  </Link>
                </li>
                <li className="text-[14px] text-[#6D6D6D]">
                  <Link to={'/journal'}>
                  Journal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="shop">
              <p className="text-[#262626] text-base font-bold pb-[25px] uppercase">Shop</p>
              <ul className="leading-[23px]">
                <li className="text-[14px] text-[#6D6D6D]">Category 1</li>
                <li className="text-[14px] text-[#6D6D6D]">Category 2</li>
                <li className="text-[14px] text-[#6D6D6D]">Category 3</li>
                <li className="text-[14px] text-[#6D6D6D]">Category 4</li>
                <li className="text-[14px] text-[#6D6D6D]">Category 5</li>
              </ul>
            </div>
            <div className="help">
              <p className="text-[#262626] text-base font-bold pb-[25px] uppercase">Help</p>
              <ul className="leading-[23px]">
                <li className="text-[14px] text-[#6D6D6D]">Privacy Policy</li>
                <li className="text-[14px] text-[#6D6D6D]">Terms & Conditions</li>
                <li className="text-[14px] text-[#6D6D6D]">Special E-shop</li>
                <li className="text-[14px] text-[#6D6D6D]">Shipping</li>
                <li className="text-[14px] text-[#6D6D6D]">Secure Payments</li>
              </ul>
            </div>
            <div className="contact">
              <p className="text-[#262626] text-base font-bold pb-[25px] uppercase w-[190px] leading-[27px]">(052) 611-5711 company@domain.com</p>
              <p className="text-[14px] text-[#6D6D6D]">575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className="footerLogo">
              <Link to={'/'}>
              <Images imgSrc={Logo}/>
              </Link>
            </div>
          </div>
          <Flex className={'justify-between'}>
            <div className="footerIcons">
              <ul className="flex justify-between gap-x-6 items-center">
                <li>
                <Link to={'/'}>
                  <FaFacebookF/>
                </Link>
                </li>
                <li>
                <Link to={'/'}>
                  <FaLinkedinIn/>
                </Link>
                </li>
                <li>
                <Link to={'/'}>
                  <FaInstagram/>
                </Link>
                </li>
              </ul>
            </div>
            <p className="text-[14px] text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Footer
