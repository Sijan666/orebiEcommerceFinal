import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

import Banner from "../layouts/Banner"
import AfterBanner from "../layouts/AfterBanner"
import StudioLoader from '../Loader';

const Ads = lazy(() => import("../layouts/Ads"));
const NewArrivals = lazy(() => import("../layouts/NewArrivals"));
const Bestseller = lazy(() => import("../layouts/Bestseller"));
const ShopBanner = lazy(() => import("../layouts/ShopBanner"));
const Specialoffer = lazy(() => import("../layouts/Specialoffer"));

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Orebi | E-Commerce Store</title>
                <meta name="description" content="Shop the latest furniture and premium items at Orebi." />
            </Helmet>
            <Banner />
            <AfterBanner />
            <Suspense fallback={<StudioLoader/>}>
                <Ads />
                <NewArrivals />
                <Bestseller />
                <ShopBanner />
                <Specialoffer />
            </Suspense>
        </>
    )
}

export default Home;