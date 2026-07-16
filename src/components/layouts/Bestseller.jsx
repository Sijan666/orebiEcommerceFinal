import Container from "../Container";
import Product from "../Product";
import { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Bestseller = () => {
    let [allData, setAllData] = useState([]);

    useEffect(()=>{
        async function allDatas() {
            try {
                const response = await axios.get("https://dummyjson.com/products")
                setAllData(response.data.products)
            } catch (error) {
                console.error('data not found' , error.message)
            }
        }
        allDatas();
    }, []);

    return (
        <div className="pt-8 pb-10 md:pb-16 lg:pb-20">
            <Container>
                <h3 className="text-[26px] md:text-[32px] lg:text-[39px] text-[#262626] font-bold block pb-5 lg:pb-[30px] px-3 lg:px-0">
                    Our Bestsellers
                </h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-8 px-3 lg:px-0'>
                    {allData.slice(0,4).map((item)=>(
                    <div key={item.id} className="w-full">
                        <Product
                        productImg={item.thumbnail}
                        badgeText={item.stock}
                        productTitle={item.title}
                        productPrice={item.price}
                        />
                    </div>
                    ))} 
                </div>
            </Container>
        </div>
    );
};

export default Bestseller;