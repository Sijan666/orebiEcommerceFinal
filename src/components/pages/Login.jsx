import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container"
import Flex from "../Flex"
import { FaArrowRight } from "react-icons/fa";



const Login = () => {
    return (
        <>
        <section id="login">
            <Container className={'py-[100px] px-3 lg:px-0'}>
                <h3 className="text-[39px] text-[#262626] font-bold block pb-5">Login</h3>
                <Flex className={'text-[12px] text-[#767676] gap-x-2'}>
                    <p>Home</p>
                    <FaArrowRight />
                    <p>Login</p>
                </Flex>
            </Container>
            <Container className={'pb-[11px] px-3 lg:px-0'}>
                <p className="text-base text-[#767676] border-b border-[#F0F0F0] pb-[60px] lg:w-[620px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </Container>
            <Container className={'py-[60px] px-3 lg:px-0'}>
                <h4 className="text-[39px] text-[#262626] font-bold block pb-5">Returning Customer</h4>
                <div className="pt-[50px]">
                    <Flex className={'gap-x-5 flex-col lg:flex-row'}>
                        <div className="email w-full lg:w-[400px]">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Email address</h4>
                            <input type="email" placeholder="company@domain.com" className="outline-none border-b border-[#F0F0F0] pb-4 w-full lg:w-[300px]"/>
                        </div>
                        <div className="pass w-full lg:w-[400px]">
                            <h4 className="pb-4 text-[#262626] font-bold text-base">Password</h4>
                            <input type="password" placeholder="********" className="outline-none border-b border-[#F0F0F0] pb-4 w-full lg:w-[300px]"/>
                        </div>
                    </Flex>
                    <div className="pt-[25px] pb-[45px] border-b border-[#F0F0F0]">
                        <Button btnText={'Log in'} className={'px-20 py-4 border border-black hover:text-black hover:bg-transparent duration-300 hover:border hover:border-black'}/>
                    </div>
                </div>
            </Container>
            <Container className={'px-3 lg:px-0'}>
                <h4 className="text-[39px] text-[#262626] font-bold block pb-5">New Customer</h4>
                <div className="py-5">
                    <p className="text-base text-[#767676] pb-[35px] lg:w-[620px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <div className="pt-[25px] pb-[70px]">
                        <Link to={'/signup'}>
                            <Button btnText={'Continue'} className={'px-20 py-4 border border-black hover:text-black hover:bg-transparent duration-300 hover:border hover:border-black'}/>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}

export default Login