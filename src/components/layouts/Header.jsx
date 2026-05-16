import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import Logo from '../../assets/Logo.png'
import { Link } from "react-router-dom"




const Header = () => {
    return (
        <>
        <Container className={'py-8'}>
            <div className="flex flex-col lg:flex-row gap-y-5 items-center">
                <div className="logo lg:w-[40%]">
                    <Link to={'/'}>
                    <Images imgSrc={Logo}/>
                    </Link>
                </div>
                <div className="menuPart lg:w-[60%] mx-auto">
                    <ul className="flex gap-x-10">
                        <li className="text-[#767676] text-[14px] hover:font-bold hover:text-[#62626] duration-300">
                            <Link to={'/'}>
                            Home
                            </Link>
                        </li>
                        <li className="text-[#767676] text-[14px] hover:font-bold hover:text-[#62626] duration-300">
                            <Link to={'/shop'}>
                            Shop
                            </Link>
                        </li>
                        <li className="text-[#767676] text-[14px] hover:font-bold hover:text-[#62626] duration-300">
                            <Link to={'/about'}>
                            About
                            </Link>
                        </li>
                        <li className="text-[#767676] text-[14px] hover:font-bold hover:text-[#62626] duration-300">
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