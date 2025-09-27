import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import UniverseSection from './Universe';
import Footer from '../Footer';
function ProductPage() {
    return (  
        <>
        <Navbar/>
        <Hero/>
        <LeftSection/>
        <RightSection/>
        <UniverseSection/>
        <Footer/>
        </>
    );
}

export default ProductPage;