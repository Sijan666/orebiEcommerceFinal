import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import Logo from '../../assets/Logo.png'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
        <Container className={'py-4 lg:py-8'}>
            <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 items-center">
                {/* Logo Part */}
                <div className="logo w-full lg:w-[40%] flex justify-center lg:justify-start">
                    <Link to={'/'}>
                    <Images imgSrc={Logo}/>
                    </Link>
                </div>
                {/* Menu Part */}
                <div className="menuPart w-full lg:w-[60%] mx-auto flex justify-center lg:justify-start">
                    <ul className="flex flex-wrap justify-center gap-x-5 sm:gap-x-7 lg:gap-x-10 gap-y-2">
                        <li className="text-[#767676] text-[14px] hover:font-bold hover:text-[#262626] duration-300">
                            <Link to={'/'}>
                            Home
                            </Link>
                        </li>
                        <li className="text-[#767676] text-[14px] hover:font-bold hover:text-[#262626] duration-300">
                            <Link to={'/shop'}>
                            Shop
                            </Link>
                        </li>
                        <li className="text-[#767676] text-[14px] hover:font-bold hover:text-[#262626] duration-300">
                            <Link to={'/about'}>
                            About
                            </Link>
                        </li>
                        <li className="text-[#767676] text-[14px] hover:font-bold hover:text-[#262626] duration-300">
                            <Link to={'/contact'}>
                            Contacts
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Header