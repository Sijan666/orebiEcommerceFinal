import Container from "../Container";
import Flex from "../Flex";
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
        <div className="pt-8 pb-20">
            <Container>
                <h3 className="text-[39px] text-[#262626] font-bold block pb-[30px]">Our Bestsellers</h3>
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-3'>
                        {allData.slice(0,4).map((item)=>(
                        <div key={item.id}>
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
