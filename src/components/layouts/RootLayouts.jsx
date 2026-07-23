import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const RootLayouts = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default RootLayouts